import express from "express";

import addProblem from "../controllers/problem/addProblem.js"
import getAllProblems from "../controllers/problem/getAllProblem.js";
import getProblemById from "../controllers/problem/getProblemById.js";
import addSubmission from "../controllers/submission/addSubmission.js";

const router = express.Router()

router.get('/getAllProblems', getAllProblems)
router.get(`/getProblemById/:id`, getProblemById)
router.post('/addProblem', addProblem)

router.post('/addSubmission', addSubmission)

export default router