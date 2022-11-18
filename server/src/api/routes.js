import express from "express";


import addProblem from "../controllers/addProblem.js"
import getAllProblems from "../controllers/getAllProblem.js";

const router = express.Router()

router.get('/getAllProblems', getAllProblems)
router.post ('/addProblem', addProblem)


export default router