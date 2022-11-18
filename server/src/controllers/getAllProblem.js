import prisma from "../db/prismaClient.js";

async function getAllProblems(req, res){
    const problems = await prisma.problem.findMany()
    res.json(problems)
}

export default getAllProblems