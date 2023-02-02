import prisma from "../../db/prismaClient.js";

async function getAllSubmission(req, res){
    const submissionList = await prisma.Submission.findMany({
        select: {
            submissionId: true,
            submissionName: true,
            language: true,
            timeSubmitted: true,
            status: true,
            runtime: true,
            message: true,
            problemId: true,
            problem: {
                select: {
                    name: true
                }
            }
        }
    })
    res.send(submissionList)
}

export default getAllSubmission