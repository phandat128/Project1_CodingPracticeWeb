import prisma from "../../db/prismaClient.js";


async function getProblemById(req, res) {
    const problemId = req.params.id

    const problem = await prisma.problem.findUnique({
        where: {
            id: Number(problemId),
        },
    })

    res.json(problem)
}

export default getProblemById