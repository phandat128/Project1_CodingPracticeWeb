# Project1_CodingPracticeWeb
### Bài tập lớn học phần Project 1
Giảng viên hướng dẫn: [TS. Đào Thanh Chung](https://soict.hust.edu.vn/ts-dao-thanh-chung.html)

Một trang Web dành cho việc thực hành và chấm điểm tự động các bài lập trình thuật toán. Xây dựng dựa trên [Codeforces](https://codeforces.com) và [OpenERP](https://openerp.dailyopt.ai).
## Đã hoàn thành
* Chức năng hiển thị danh sách các bài toán
* Chức năng chấm submit và lưu kết quả vào cơ sở dữ liệu
* Chức năng hiển thị danh sách các bài đã nộp, cho phép xem lại chi tiết các bài đã nộp
* Chức năng thêm bài toán mới
## Mục tiêu
* Kiểm tra bài submit với nhiều testcase khác nhau
* Có thể submit với nhiều ngôn ngữ khác (Java, Python,...)

## Cách chạy chương trình
1. 
    ```bash
    git clone https://github.com/phandat128/Project1_CodingPracticeWeb.git
    cd server
    npm install
    cd ../client
    npm install
    ```
2. Tạo file .env ở server và client
    * server/.env
        > DATABASE_URL="postgresql://username:passwords@host/db_name?schema=public"
    * client/.env
        > REACT_APP_API_URL  = "http://localhost:8000/api"
3. 
    ```bash
    cd server
    npm start
    cd ../client
    npm start
    ```
## Công nghệ sử dụng
Server được xây dựng bằng NodeJS + ExpressJS + PostgreSQL.

Client được xây dựng bằng ReactJS + Bootstrap.