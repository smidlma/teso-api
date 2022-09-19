import { Request, Response } from 'express'
import { User, UserModel } from '../schemas/user'

export const register = async (req: Request, res: Response) => {
  try {
    const { name, password, confirmPassword } = req.body
    console.log(name, password, confirmPassword)
    res.send('register router')
  } catch (error) {}
}
