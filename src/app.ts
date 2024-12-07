import express, { Request, Response } from 'express'
import userRouter from './module/user/user.router'
import bookRouter from './module/book/book.route'

const app = express()

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', bookRouter)

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Welcome to my API!',
        version: '1.0.0',
        status: 'success',
    })
})

export default app
