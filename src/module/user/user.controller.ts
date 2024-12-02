/* eslint-disable prettier/prettier */
import { Request, Response } from 'express'
import User from './user.model'

const createUser = async (req: Request, res: Response) => {
    try {
        const jload = req.body

        const result = await User.create(jload)
        res.json({
            status: 'success',
            message: 'User created successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            massage: 'validation error',
            error,
        })
    }
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
