import { fileURLToPath } from 'url'
import path from 'path'
import CodeRunner from '../../judgeEngine/CodeRunner.js';
import FileAPI from '../../api/fileAPI.js';
import evaluate from '../../judgeEngine/evaluate.js';
import prisma from '../../db/prismaClient.js';

async function addSubmission(req, res) {
    const fileAPI = new FileAPI()
    const body = req.body
    console.log(body)
    const sourceCode = body.sourcefile || body.sourcecode
    const controllerDirPath = path.dirname(fileURLToPath(import.meta.url)) //.../src/controller/submission 

    const solutionDirPath = path.join(controllerDirPath, "../../", 'solution')
    const solutionFileName = `${body.time}-${body.problemName.replace(" ", "_")}`
    const solutionFileExt = languageExtension(body.language)
    const solutionFilePath = path.join(solutionDirPath, `${solutionFileName}${solutionFileExt}`) //.../src/solution/fileName.ext
    //write sourcecode to file stored in solution directory
    try {
        fileAPI.writeSolution(solutionFilePath, sourceCode)
    } catch (e) {
        console.error(e)
        res.status(500).json("Server error: " + e.message)
        return
    }


    //add the solution to database with status pending
    const timeSubmitted = new Date(body.time + new Date(2020, 0, 1).getTime())
    const initSubmission = {
        problemId: body.problemId,
        submissionName: solutionFileName,
        language: body.language,
        timeSubmitted: timeSubmitted,
        timeUpdated: timeSubmitted,
        runtime: 0,
        status: "PENDING",
    }
    let submissionId = 0
    try {
        const submission = await prisma.Submission.create({
            data: initSubmission
        })
        console.log("Submission is created in database")
        submissionId = submission.submissionId
    } catch (e) {
        console.log(e)
        res.status(500).json("Server error: " + e.message)
        return
    }

    //copy solution file from solution directory to judgeEngine directory
    const runner = new CodeRunner()
    const tempFilePath = path.join(runner.dirname, `temp${solutionFileExt}`)
    //console.log(tempFilePath)
    fileAPI.copyFile(solutionFilePath, tempFilePath)

    //copy testcase files to judgeEngine directory
    const testcaseDirPath = path.join(controllerDirPath, "../../", "testcase", body.problemId.toString())
    fileAPI.copyTestcase(testcaseDirPath, runner.dirname)

    await new Promise(resolve => setTimeout(resolve, 1000)) // wait 1s
    let runtime = 0
    let result = null
    try {
        //run temp file
        const startTime = Date.now()
        runner.compile(tempFilePath, runner.dirname, "temp", solutionFileExt)
        const compileTime = Date.now() - startTime
        console.log(`Compiling time: ${compileTime} ms`)
        runner.execute(runner.dirname, "temp")
        runtime = Date.now() - startTime - compileTime
        console.log(`Running time: ${runtime} ms`)
        //evaluate output
        result = evaluate(path.join(runner.dirname, "results.txt"), path.join(runner.dirname, "output.txt"))
        console.log("Evaluate result:" + result)
    } catch (e) {
        // error occured, update status according to error name 
        console.log(e)
        await prisma.Submission.update({
            where: {
                submissionId: submissionId
            },
            data: {
                status: e.name,
                message: e.message,
                timeUpdated: new Date(),
                runtime: runtime
            }
        })
        console.log("Update failed submission")
        return;
    }
    // result is accepted
    if (result === "ACCEPTED") {
        await prisma.Submission.update({
            where: {
                submissionId: submissionId
            },
            data: {
                runtime: runtime,
                status: result,
                message: "Congratulations!",
                timeUpdated: new Date()
            }
        })
    }
    console.log("Update accepted submission")

}

function languageExtension(language) {
    if (language === 'C++') return '.cpp'
    if (language === 'Java') return '.java'
    if (language === 'Python') return '.py'
    throw new Error('Invalid language')
}

export default addSubmission
