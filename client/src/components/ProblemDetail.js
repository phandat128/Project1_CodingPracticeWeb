import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

function ProblemDetail() {
    const { id } = useParams()
    const [problem, setProblem] = useState({
        id: 1,
        name: "Compute C_k_n",
        topic: "Given two positive integers k and n. \nCompute C(k,n) which is the number of ways to select k objects from a given set of n objects.",
        input: "Two positive integers k and n (1 <= k,n <= 999).",
        output: "Write the value C(k,n) modulo 10^9+7.",
        exampleInput: "3  5",
        exampleOutput: "10",
    })

    async function getProblemById(id) {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/getProblemById/" + id)
            setProblem(response.data)
            console.log(problem)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProblemById(id)
    }, [])

    return (
        <div className="problem">
            <div className="name">{problem.id}. {problem.name}</div>
            <div className="topic">
                <div>{problem.topic}</div>
            </div>
            <div className="primary-div">
                <div>Input</div>
                <div>{problem.input}</div>
            </div>
            <div className="primary-div">
                <div>Output</div>
                <div>{problem.output}</div>
            </div>
            <div className="primary-div">
                <div>Example</div>
                <div className="secondary-div">
                    <div>Input</div>
                    <div>{problem.exampleInput}</div>
                </div>
                <div className="secondary-div">
                    <div>Output</div>
                    <div>{problem.exampleOutput}</div>
                </div>
            </div>
        </div>
    )
}

export default ProblemDetail