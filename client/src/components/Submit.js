import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { Editor, EditorState } from "draft-js"
import { useState } from "react"
import axios from "axios"

function Submit() {
    const [problemList, setProblemList] = useState([
        {
            id: 1,
            name: "Compute C_k_n",
        },
    ])
    const [problem, setProblem] = useState("1. Compute C_k_n")
    const [language, setLanguage] = useState("C++")
    const [editor, setEditor] = useState(() => EditorState.createEmpty())

    const languageList = ["C++", "Java", "Python 3", "JavaScript"]
    //async function sendSubmit(submit) {
    //    await axios.post
    //}

    function handleSubmit(e) {
        e.preventDefault()
        const submit = {
            problemId: (Number)(problem.split(".")[0]),
            language: language,
            sourcecode: editor.getCurrentContent().getPlainText(),
        }
        console.log(submit)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Table borderless className="submit-table">
                <tbody>
                    <tr>
                        <td className="title">Problem: </td>
                        <td>
                            <select className="form-select" onChange={e => setProblem(e.target.value)}>
                                {problemList.map(problem => (
                                    <option>{problem.id}. {problem.name}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="title">Language: </td>
                        <td>
                            <select className="form-select" onChange={e => setLanguage(e.target.value)}>
                                {languageList.map(language => (
                                    <option>{language}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="title">Source code: </td>
                        <td>
                            <div className="form-control">
                                <Editor editorState={editor} onChange={setEditor} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div style={{ textAlign: "center" }}>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    )
}

export default Submit