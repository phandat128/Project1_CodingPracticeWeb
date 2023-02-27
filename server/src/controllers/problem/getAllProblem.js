import prisma from "../../db/prismaClient.js";

async function getAllProblems(req, res){
    try {
        const problems = await prisma.problem.findMany({
        select: {
            id: true,
            name: true
        }
    })
    res.json(problems)
    } catch(e){
        console.error(e)
        res.status(404).json("Not found")
    }
    
}

export default getAllProblems