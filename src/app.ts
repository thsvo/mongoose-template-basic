/* eslint-disable prettier/prettier */
import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Welcome to my API!',
    version: '1.0.0',
    status: 'success',
  })
})

export default app
