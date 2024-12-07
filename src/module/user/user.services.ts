import { IUser } from './user.interface'
import User from './user.model'

const createUser = async (jload: IUser): Promise<IUser> => {
    const result = await User.create(jload)
    return result
}

const getUser = async () => {
    const users = await User.find({})
    return users
}

const getSingleProduct = async (id: string) => {
    const result = await User.findById(id)
    return result
}

const getUpdateProduct = async (id: string, data: IUser) => {
    const result = await User.findByIdAndUpdate(id, data, {
        new: true,
    })
    return result
}

const getDeleteProduct = async (id: string) => {
    const result = await User.findByIdAndDelete(id)
    return result
}

export const userService = {
    createUser,
    getUser,
    getSingleProduct,
    getUpdateProduct,
    getDeleteProduct,
}
