import { fileURLToPath } from 'url'
import path from 'path'
import CodeRunner from '../../judgeEngine/CodeRunner.js';
import FileAPI from '../../api/fileAPI.js';
import evaluate from '../../judgeEngine/evaluate.js';

async function addSubmission(req, res) {
    const fileAPI = new FileAPI()
    const body = req.body
    console.log(body)
    const sourceCode = body.sourcefile || body.sourcecode
    const controllerDirPath = path.dirname(fileURLToPath(import.meta.url)) //.../src/controller/submission 

    //write sourcecode to file stored in solution directory
    const solutionDirPath = path.join(controllerDirPath, "../../", 'solution')
    const solutionFileName = `${body.time}-${body.problemName.replace(" ", "_")}`
    const solutionFileExt = languageExtension(body.language)
    const solutionFilePath = path.join(solutionDirPath, `${solutionFileName}${solutionFileExt}`) //.../src/solution/fileName.ext
    //console.log(sourceCode)
    fileAPI.writeSolution(solutionFilePath, sourceCode)
    //console.log(solutionFilePath)

    //copy solution file from solution directory to judgeEngine directory
    const runner = new CodeRunner()
    const tempFilePath = path.join(runner.dirname, `temp${solutionFileExt}`)
    //console.log(tempFilePath)
    fileAPI.copyFile(solutionFilePath, tempFilePath)

    //copy testcase files to judgeEngine directory
    const testcaseDirPath = path.join(controllerDirPath, "../../", "testcase", body.problemId.toString())
    fileAPI.copyTestcase(testcaseDirPath, runner.dirname)
    
    try {
        //run temp file
        const startTime = Date.now()
        runner.compile(tempFilePath, runner.dirname, "temp", solutionFileExt)
        const compileTime = Date.now() - startTime
        console.log(`Compiling time: ${compileTime} ms`)
        runner.execute(runner.dirname, "temp")
        const runTime = Date.now() - startTime - compileTime
        console.log(`Running time: ${runTime} ms`)

        //evaluate output
        const result = evaluate(path.join(runner.dirname, "results.txt"), path.join(runner.dirname, "output.txt"))
        console.log("Evaluate result:" + result)
        res.json(result)
    } catch (e) {
        console.log(e.name)
        console.log(e.message)
        res.json({
            error: e.name,
            message: e.message
        })
    }
}

function languageExtension(language) {
    if (language === 'C++') return '.cpp'
    if (language === 'Java') return '.java'
    if (language === 'Python') return '.py'
    throw new Error('Invalid language')
}

export default addSubmission
