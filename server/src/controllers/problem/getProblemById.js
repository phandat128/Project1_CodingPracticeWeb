import prisma from "../../db/prismaClient.js";


async function getProblemById(req, res) {
    const problemId = req.params.id
    try {
        const problem = await prisma.problem.findUnique({
            where: {
                id: Number(problemId),
            },
        })

        res.json(problem)
    } catch (e) {
        console.error(e)
        res.status(404).json("Not Found")
    }

}

export default getProblemById