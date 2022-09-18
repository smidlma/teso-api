import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
  res.send('HelloWorld')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
