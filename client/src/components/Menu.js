import { Link } from "react-router-dom"


function Menu(){
    return (
        <div className="menu roundbox">
            <ul className="flex">
                <li>
                    <Link to = "/">HOME</Link>
                </li>
                <li>
                    <Link to = "/problemList">PROBLEMS</Link>
                </li>
                <li>
                    <Link to = "/submit">SUBMIT</Link>
                </li>
                <li>
                    <Link to = "/submissionList">SUBMISSIONS</Link>
                </li>
                <li>
                    <Link to = "/addProblem">CONTRIBUTE</Link>
                </li>
                <li>
                    <Link to = "/help">HELP</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;