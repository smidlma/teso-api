import { NextFunction } from 'express'

const authentication = (req: Request, res: Response, next: NextFunction) => {
  next()
}

export { authentication }
