import prisma from "../../db/prismaClient.js"

async function getSubmissionByProblemId(req, res){
    const problemId = req.params.problemId

    const submissionList = await prisma.Submission.findMany({
        where: {
            problemId: problemId
        },
        select: {
            name: true,
            submission: {
                select: {
                    submissionId: true,
                    language: true, 
                    timeSubmitted: true, 
                    status: true
                }
            }
        }
    })

    res.send(submissionList)
}

export default getSubmissionByProblemId