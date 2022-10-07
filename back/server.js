const express = require('express')
const app = express()
require('dotenv').config(); // 환경 변수

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port 8080`)
})