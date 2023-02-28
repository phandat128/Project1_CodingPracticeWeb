# Project1_CodingPracticeWeb
### Bài tập lớn học phần Project 1
Giảng viên hướng dẫn: [TS. Đào Thanh Chung](https://soict.hust.edu.vn/ts-dao-thanh-chung.html)

Một trang Web dành cho việc thực hành và chấm điểm tự động các bài lập trình thuật toán. Xây dựng dựa trên [Codeforces](https://codeforces.com) và [OpenERP](https://openerp.dailyopt.ai).
## Đã hoàn thành
* Chức năng hiển thị danh sách các bài toán
* Chức năng chấm submit và lưu kết quả vào cơ sở dữ liệu
* Chức năng hiển thị danh sách các bài đã nộp, cho phép xem lại chi tiết các bài đã nộp
* Chức năng thêm bài toán mới
## Một số thành phần quan trọng
### 1. Lớp CodeRunner để biên dịch và chạy mã nguồn
* Phương thức compile
```javascript
compile(file, directory, fileName, extension) {
        if (extension != '.cpp') {
            console.log('this is not a cpp file');
            return;
        }
        const argsCompile = []
        argsCompile[0] = file
        argsCompile[1] = '-o'
        argsCompile[2] = path.join(directory, `${fileName}`)

        const compiler = spawnSync("g++", argsCompile)
        console.log('Compiling exit with code: ' + compiler.status)
        if (compiler.stderr.toString()){
            throw new CompileError(compiler.stderr.toString())
        }
    }

```
* Phương thức execute
```javascript
    execute(directory, fileName) {
        const exeFilePath = path.join(directory, fileName)
        const inputFilePath = path.join(directory, "input.txt")
        const outputFilePath = path.join(directory, "results.txt")

        const inputFile = fs.readFileSync(inputFilePath)

        const executer = spawnSync(exeFilePath, [] , {
            input: inputFile,
            encoding: 'utf-8',
            timeout: 3000
        })
        if (executer.error){
            throw new TimeLimitExceeded()
        }
        console.log('Executing exit with code: ' + executer.status)
        if (executer.stderr.toString()) {
            throw new RuntimeError(executer.stderr.toString())
        }
        fs.writeFileSync(outputFilePath, executer.stdout)
        console.log('Output: ' + executer.stdout)
    }
```
### 2. Controller [addSubmission](https://github.com/phandat128/Project1_CodingPracticeWeb/blob/main/server/src/controllers/submission/addSubmission.js) để nhận submit và chấm kết quả

## Mục tiêu phát triển
* Kiểm tra bài submit với nhiều testcase khác nhau
* Có thể submit với nhiều ngôn ngữ khác (`Java`, `Python`,...)

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

        `DATABASE_URL="postgresql://username:passwords@host/db_name?schema=public"`
    * client/.env

        `REACT_APP_API_URL  = "http://localhost:8000/api"`
3. 
    ```bash
    cd server
    npm start
    cd ../client
    npm start
    ```
## Công nghệ sử dụng
Server được xây dựng bằng `NodeJS` + `ExpressJS` + `PostgreSQL`.

Client được xây dựng bằng `ReactJS` + `Bootstrap`.