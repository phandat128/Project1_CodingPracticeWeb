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
    const [file, setFile] = useState(null)

    const languageList = ["C++", "Java", "Python 3", "JavaScript"]
    //async function sendSubmit(submit) {
    //    await axios.post
    //}

    function fileToBase64(_file) {
        const reader = new FileReader()
        if (_file == null) return null;
        return new Promise((resolve, reject) =>{
            reader.onerror = () => {
                reader.abort()
                reject(new Error("Couldn't open file"))
            }
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.readAsDataURL(_file)
        })
    }

    function getTime(){
        const time = new Date()
        const timeMilestone = new Date(2020,0,1)
        return time.getTime() - timeMilestone.getTime()
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const sourcefile = await fileToBase64(file)
        const submit = {
            problemId: (Number)(problem.split(". ")[0]),
            problemName: problem.split(". ")[1],
            language: language,
            sourcecode: editor.getCurrentContent().getPlainText(),
            sourcefile: sourcefile,
            time: getTime()
        }
        console.log(submit)
        const result = await axios.post(process.env.REACT_APP_API_URL + "/addSubmission", submit)
        console.log(result.data)
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
                    <tr>
                        <td className="title">Or submit file: </td>
                        <td>
                            <input type="file" name="submit-file" onChange={e => setFile(e.target.files[0])} />
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