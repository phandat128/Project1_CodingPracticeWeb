import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Table from "react-bootstrap/Table"
import axios from "axios"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import SubmissionDetail from "./SubmissionDetail.js"

function SubmissionList() {
    const [list, setList] = useState([
        {
            "submissionId": 4,
            "language": "C++",
            "timeSubmitted": "2023-01-14T14:57:09.795Z",
            "status": "PENDING",
            "runtime": 0,
            "message": "",
            "problemId": 1,
            "problem": {
                "name": "C(k,n)"
            }
        }
    ])

    async function getSubmissionList() {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/getAllSubmissions")
            setList(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSubmissionList()
    }, [])

    return (
        <Table bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Problem</th>
                    <th>Time</th>
                    <th>Language</th>
                    <th>Status</th>
                    <th>Runtime</th>
                </tr>
            </thead>
            <tbody>
                {list.map(e => (
                    <tr key={e.submissionId}>
                        <td>
                            <div to={""}>{e.submissionId}</div>
                        </td>
                        <td>
                            <Link to={`/problem/${e.problemId}`}>{e.problem.name}</Link>
                        </td>
                        <td>
                            <div to={""}>{new Date(e.timeSubmitted).toLocaleString()}</div>
                        </td>
                        <td>
                            <div to={""}>{e.language}</div>
                        </td>
                        <td>
                            {/*<Popup 
                                contentStyle={{"width": "30%"}} 
                                modal nested 
                                trigger={<Link>{e.status}</Link>} 
                                position="center center">
                                <SubmissionDetail status={e.status} message={e.message} submissionName={e.submissionName} language={e.language}/>
                            </Popup>*/}
                            <Link to={`/submissionDetail/${e.submissionId}`}>{e.status}</Link>
                        </td>
                        <td>
                            <div to={""}>{e.runtime} ms</div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default SubmissionList