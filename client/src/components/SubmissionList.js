import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Table from "react-bootstrap/Table"
import Pagination from "react-bootstrap/Pagination"
import axios from "axios"
import 'reactjs-popup/dist/index.css'

import Loading from "./Loading.js"

function SubmissionList() {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    const itemPerPage = 20
    const [currentPage, setCurrentPage] = useState(1)
    function renderTablePage() {
        const startIndex = (currentPage - 1) * itemPerPage
        const endIndex = startIndex + itemPerPage
        const listInPage = list.slice(startIndex, endIndex)
        return (listInPage.map(e => (
            <tr key={e.submissionId}>
                <td>
                    <Link to={`/submissionDetail/${e.submissionId}`}>{e.submissionId}</Link>
                </td>
                <td>
                    <Link to={`/problem/${e.problemId}`}>{e.problem.name}</Link>
                </td>
                <td>
                    <span>{new Date(e.timeSubmitted).toLocaleString()}</span>
                </td>
                <td>
                    <span>{e.language}</span>
                </td>
                <td>
                    <Link to={`/submissionDetail/${e.submissionId}`} className={e.status}>{e.status}</Link>
                </td>
                <td>
                    <span>{e.runtime} ms</span>
                </td>
            </tr>
        )))
    }

    function renderPaginationItem() {
        const totalItems = list.length
        const totalPages = Math.ceil(totalItems / itemPerPage)
        const paginationItems = []
        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
            paginationItems.push(
                <Pagination.Item
                    key={pageNum}
                    active={pageNum === currentPage}
                    onClick={() => setCurrentPage(pageNum)}
                >
                    {pageNum}
                </Pagination.Item>
            )
        }
        return paginationItems
    }

    async function getSubmissionList() {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/getAllSubmissions")
            setList(response.data.reverse())
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSubmissionList()
    }, [])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
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
                            {renderTablePage()}
                        </tbody>
                    </Table>
                    <div style={{textAlign: 'center'}}>
                        <Pagination style={{display: 'inline-flex'}}>
                            {renderPaginationItem()}
                        </Pagination>
                    </div>
                </>
            )}
        </>
    )
}

export default SubmissionList