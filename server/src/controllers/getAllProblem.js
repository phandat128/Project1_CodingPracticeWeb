import prisma from "../db/prismaClient.js";

async function getAllProblems(req, res){
    const problems = await prisma.problem.findMany({
        select: {
            id: true,
            name: true
        }
    })
    res.json(problems)
}

export default getAllProblems