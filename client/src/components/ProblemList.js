import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Table from "react-bootstrap/Table"
import axios from "axios"

function ProblemList() {
    const [list, setList] = useState([
        {
            id: 1,
            name: "Compute C_k_n",
        },
    ])

    async function getList(){
        try{
    		const response = await axios.get(process.env.REACT_APP_API_URL + "/getAllProblems")
            setList(response.data)
        } catch(err){
    		console.log(err)
    	}
    }

    useEffect(() => {
    	getList()
    },[])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
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
        </Table>
    )
}

export default ProblemList