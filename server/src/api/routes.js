import express from "express";

import addProblem from "../controllers/problem/addProblem.js"
import getAllProblems from "../controllers/problem/getAllProblem.js";
import getProblemById from "../controllers/problem/getProblemById.js";
import addSubmission from "../controllers/submission/addSubmission.js";
import getSubmissionById from "../controllers/submission/getSubmissionById.js"
import getAllSubmission from "../controllers/submission/getAllSubmission.js"
import getSubmissionByProblemId from "../controllers/submission/getSubmissionByProblemId.js"
import getSubmissionDetail from "../controllers/submission/getSubmissionDetail.js";


const router = express.Router()

router.get('/getAllProblems', getAllProblems)
router.get(`/getProblemById/:id`, getProblemById)
router.post('/addProblem', addProblem)

router.post('/addSubmission', addSubmission)
router.get('/getAllSubmissions', getAllSubmission)
router.get(`/getSubmissionById/:submissionId`, getSubmissionById)
router.get(`/getSubmissionByProblemId/:problemId`, getSubmissionByProblemId)
router.get(`/getSubmissionDetail/:submissionId`, getSubmissionDetail)

export default router