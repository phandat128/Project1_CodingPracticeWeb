import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Table from "react-bootstrap/Table"
import axios from "axios"
import Loading from "./Loading.js"

function ProblemList() {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    async function getList() {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/getAllProblems")
            setList(response.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getList()
    }, [])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(e => (
                            <tr key={e.id}>
                                <td>
                                    <Link to={"/problem/" + e.id}>{e.id}</Link>
                                </td>
                                <td>
                                    <Link to={"/problem/" + e.id}>{e.name}</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>)}
        </>
    )
}

export default ProblemList