import { AllowedSchema } from 'express-json-validator-middleware'

const createUserSchema: AllowedSchema = {
  type: 'object',
  required: ['name', 'password', 'confirmPassword'],
  properties: {
    name: { type: 'string' },
    password: { type: 'string' },
    confirmPassword: {
      const: {
        $data: '1/password',
      },
      type: 'string',
    },
  },
}

export { createUserSchema }
