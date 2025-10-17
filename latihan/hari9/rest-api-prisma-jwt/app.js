require('dotenv').config()
const cors = require('cors')
const express = require('express')
const router = require('./src/routes/main')

const app = express()
const port = 3000

var corsOptions = {
origin: process.env.CORS_ALLOW_LIST,
optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
