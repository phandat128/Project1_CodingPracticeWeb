import prisma from "../db/prismaClient.js";


async function addProblem(req, res) {
    const data = req.body

    const problem = {
        name: data.name,
        topic: data.topic,
        input: data.input,
        output: data.output,
        exampleInput: data.exampleInput,
        exampleOutput: data.exampleOutput,
    }
    
    console.log(problem)
    

    await prisma.Problem.create({
        data: problem
    })

    res.json(problem)
}

export default addProblem