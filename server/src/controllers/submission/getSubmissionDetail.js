import prisma from "../../db/prismaClient.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

async function getSubmissionDetail(req, res) {
    const submissionId = req.params.submissionId
    const submission = await prisma.Submission.findUnique({
        where: {
            submissionId: Number(submissionId)
        }
    })
    const status = submission.status
    const message = submission.message

    const submissionName = submission.submissionName
    const extension = languageExtension(submission.language)
    const controllerDirPath = path.dirname(fileURLToPath(import.meta.url)) //.../src/controller/submission 
    const solutionDirPath = path.join(controllerDirPath, "../../", 'solution')
    const submissionPath = path.join(solutionDirPath, `${submissionName}${extension}`)
    fs.readFile(submissionPath, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        res.json({
            status: status,
            message: message,
            code: data.toString()
        })
    })
}

function languageExtension(language) {
    if (language === 'C++') return '.cpp'
    if (language === 'Java') return '.java'
    if (language === 'Python') return '.py'
    throw new Error('Invalid language')
}

export default getSubmissionDetail