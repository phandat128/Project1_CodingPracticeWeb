import axios from "axios"
import { useEffect, useState } from "react"
import { Editor, EditorState, ContentState } from "draft-js"
import { useParams } from "react-router-dom"

function SubmissionDetail() {
    const { id } = useParams()
    const [detail, setDetail] = useState({
        status: '',
        message: '',
    })
    const [code, setCode] = useState(() => EditorState.createEmpty())
    async function getCode() {
        const response = await axios.get(process.env.REACT_APP_API_URL + "/getSubmissionDetail/" + id)
        setDetail({
            status: response.data.status,
            message: response.data.message
        })
        setCode(EditorState.createWithContent(ContentState.createFromText(response.data.code)))
    }
    useEffect(() => {
        getCode()
    }, [])
    return (
        <div>
            <h3 className="title">Submission Id: {id}</h3>
            <div className="message">
                <p>STATUS: {detail.status}</p>
                <p>MESSAGE: {detail.message}</p>
                <p>Your code submitted:</p>
                <div className="roundbox">
                    <Editor editorState={code} readOnly={true}/>
                </div>
            </div>
        </div>
    )
}

export default SubmissionDetail