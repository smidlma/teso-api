import { Router } from 'express'
import { Validator } from 'express-json-validator-middleware'
import { register } from '../../controllers/register'
import { createUserSchema } from '../../schemas/validations/validations'

const { validate } = new Validator({ $data: true })
const authRouter = Router()

authRouter.post('/register', validate({ body: createUserSchema }), register)
authRouter.post('/login')

export { authRouter }
