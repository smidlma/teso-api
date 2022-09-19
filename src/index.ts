import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import { authRouter } from './routes/auth/auth'
import { ValidationError } from 'express-json-validator-middleware'
import { validationErrorMiddleware } from './middlewares/error/error'
dotenv.config()

const app = express()
const port = process.env.SERVER_PORT

app.use(express.json())

app.get('/', (req, res) => {
  res.send('HelloWorld')
})

app.use('/auth', authRouter)

app.use(validationErrorMiddleware)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
