import { Router } from 'express'
import { userController } from './user.controller'

const userRouter = Router()

userRouter.post('/products', userController.createUser)
userRouter.get('/products', userController.getUser)
userRouter.get('/products/:id', userController.getSingle)
userRouter.put('/products/:id', userController.UpdateBook)
userRouter.delete('/products/:id', userController.deleteBook)
export default userRouter
