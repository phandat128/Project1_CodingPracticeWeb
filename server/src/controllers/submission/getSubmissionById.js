import prisma from "../../db/prismaClient.js"


async function getSubmissionById(req, res){
    const submissionId = req.params.submissionId

    const submission = await prisma.Submission.findUnique({
        where: {
            submissionId: submissionId,
        }
    })

    res.send(submission)
}

export default getSubmissionById