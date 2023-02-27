import { Link } from "react-router-dom"

function Help(){
    return (
        <div className="help">
            <h2>Hướng dẫn sử dụng</h2>
            <h3>Nộp submit:</h3>
            <ol>
                <li>Xem danh sách các bài toán tại <Link to = '/problemList'>PROBLEMS</Link></li>
                <li>Nhấn vào bài toán cần xem</li>
                <li>Viết file submit và gửi submit tại <Link to='/submit'>SUBMIT</Link></li>
                <li>Xem kết quả tại <Link to='/submissionList'>SUBMISSIONS</Link></li>
            </ol>
            <h4>Đóng góp bài mới tại <Link to='/addProblem'>CONTRIBUTE</Link></h4>
        </div>
    )
}

export default Help