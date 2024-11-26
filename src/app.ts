/* eslint-disable prettier/prettier */
import express, { Request, Response } from 'express'
import userRouter from './module/user/user.router'

const app = express()

app.use(express.json())
app.use('/api/user', userRouter)

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Welcome to my API!',
        version: '1.0.0',
        status: 'success',
    })
})

export default app
