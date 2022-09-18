import express, { Request } from 'express'
import dotenv from 'dotenv'
import { register } from './controllers/register'

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT

app.use(express.json())

app.get('/', (req, res) => {
  res.send('HelloWorld')
})

app.post('/register', register)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
