import { Request, Response } from 'express'
import { userService } from './user.services'

const createUser = async (req: Request, res: Response) => {
    try {
        const jload = req.body

        const result = await userService.createUser(jload)
        res.json({
            success: true,
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
    try {
        const result = await userService.getUser()
        res.json({
            success: true,
            message: 'User fetched successfully',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Error fetching user',
            error,
        })
    }
}

const getSingle = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const result = await userService.getSingleProduct(userId)

        res.json({
            success: true,
            message: 'Book retrieved successfully',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Error fetching user',
            error,
        })
    }
}

const UpdateBook = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const body = req.body
        const result = await userService.getUpdateProduct(userId, body)
        res.json({
            success: true,
            message: 'User updated successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Error updating user',
            error,
        })
    }
}

const deleteBook = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const result = await userService.getDeleteProduct(userId)
        res.json({
            success: true,
            message: 'User deleted successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Error deleting user',
            error,
        })
    }
}

export const userController = {
    createUser,
    getUser,
    getSingle,
    UpdateBook,
    deleteBook,
}
