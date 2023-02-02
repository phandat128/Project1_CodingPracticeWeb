# Project1_CodingPracticeWeb
Một trang Web dành cho việc thực hành và chấm điểm tự động các bài lập trình thuật toán.
Xây dựng dựa trên [Codeforces](https://codeforces.com) và [OpenERP](https://openerp.dailyopt.ai).
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