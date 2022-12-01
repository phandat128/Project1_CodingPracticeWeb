import express from "express";


import addProblem from "../controllers/addProblem.js"
import getAllProblems from "../controllers/getAllProblem.js";
import getProblemById from "../controllers/getProblemById.js";

const router = express.Router()

router.get('/getAllProblems', getAllProblems)
router.get(`/getProblemById/:id`, getProblemById)
router.post ('/addProblem', addProblem)


export default router