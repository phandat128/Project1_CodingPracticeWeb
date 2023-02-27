import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Editor, EditorState, ContentState } from "draft-js"
import Loading from "./Loading"

function ProblemDetail() {
    const { id } = useParams()
    const [problem, setProblem] = useState({
        id: 0,
        name: "",
        topic: "",
        input: "",
        output: "",
        exampleInput: "",
        exampleOutput: "",
    })
    const [loading, setLoading] = useState(true)

    async function getProblemById(id) {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/getProblemById/" + id)
            setProblem(response.data)
            setLoading(false)
            //console.log(problem)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProblemById(id)
    }, [])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="problem">
                    <div className="name">{problem.id}. {problem.name}</div>
                    <div className="topic">
                        <Editor editorState={EditorState.createWithContent(ContentState.createFromText(problem.topic))} readOnly={true}/>
                    </div>
                    <div className="primary-div">
                        <span>Input</span>
                        <Editor editorState={EditorState.createWithContent(ContentState.createFromText(problem.input))} readOnly={true}/>
                    </div>
                    <div className="primary-div">
                        <span>Output</span>
                        <Editor editorState={EditorState.createWithContent(ContentState.createFromText(problem.output))} readOnly={true}/>
                    </div>
                    <div className="primary-div">
                        <span>Example</span>
                        <div className="secondary-div">
                            <span>Input</span>
                            <Editor editorState={EditorState.createWithContent(ContentState.createFromText(problem.exampleInput))} readOnly={true}/>
                        </div>
                        <div className="secondary-div">
                            <span>Output</span>
                            <Editor editorState={EditorState.createWithContent(ContentState.createFromText(problem.exampleOutput))} readOnly={true}/>
                        </div>
                    </div>
                </div >)}
        </>
    )
}

export default ProblemDetail