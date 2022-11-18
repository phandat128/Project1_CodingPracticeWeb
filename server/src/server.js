import express from 'express'

import router from './api/routes.js'

const app = express()

app.use(express.json())

app.use('/api', router)

app.listen(8000, () =>{
    console.log("server is listening on http://localhost:8000")
})
