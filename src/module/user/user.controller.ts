import { Request, Response } from 'express'
import User from './user.model'

const createUser = async (req: Request, res: Response) => {
    const jload = req.body

    const result = await User.create(jload)
    res.json({
        status: 'success',
        message: 'User created successfully',
        data: result,
    })
}

const getUser = async (req: Request, res: Response) => {
    const payload = req.body
    const result = await User.create(payload)
    res.json({
        status: 'success',
        message: 'User created successfully',
        data: result,
    })
}
export const userController = {
    createUser,
    getUser,
}
