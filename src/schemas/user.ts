import { getModelForClass, prop } from '@typegoose/typegoose'

class User {
  @prop()
  name!: string

  @prop()
  password!: string
}

const UserModel = getModelForClass(User)

export { UserModel, User }
