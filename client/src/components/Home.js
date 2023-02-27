import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <h1 style={{color: 'red'}}>WELCOME</h1>
            <p>Chào mọi người, đây là website Coding Practice, 
            là trang web để lưu lại các bài thực hành thuật toán ứng dụng cùng với chức năng chấm điểm tự động, hiển thị kết quả cho mọi người.</p>
            <p>Trang web được xây dựng cho học phần Project1 - KHMT - ĐHBKHN</p>
            <p>Sinh viên thực hiện: Phan Văn Đạt. MSSV: 20200130</p>
            <p>Giảng viên hướng dẫn: <a href ='https://soict.hust.edu.vn/ts-dao-thanh-chung.html' target='blank' style={{textDecoration: 'underline'}}>TS. Đào Thành Chung</a></p>
            <p>Source code: <a href='https://github.com/phandat128/Project1_CodingPracticeWeb' target='blank' style={{textDecoration: 'underline'}}>click here</a></p>
        </div>
    )
}

export default Home