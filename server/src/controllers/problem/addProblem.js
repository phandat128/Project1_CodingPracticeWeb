import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

import prisma from "../../db/prismaClient.js";

async function addProblem(req, res) {
    const data = req.body

    const initProblem = {
        name: data.name,
        topic: data.topic,
        input: data.input,
        output: data.output,
        exampleInput: data.exampleInput,
        exampleOutput: data.exampleOutput,
    }

    console.log(data)

    try {
        const problem = await prisma.Problem.create({
            data: initProblem
        })
        const problemId = problem.id

        const testcaseDirPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "../../", "testcase", problemId.toString())
        fs.mkdirSync(testcaseDirPath, {recursive: true})
        fs.writeFileSync(path.join(testcaseDirPath, "input.txt"), data.testInput)
        fs.writeFileSync(path.join(testcaseDirPath, "output.txt"), data.testOutput)
    } catch(e){
        console.error(e)
        res.status(500).json("Server error: " + e.message)
        return
    }
    

    res.json("done")
}

export default addProblem