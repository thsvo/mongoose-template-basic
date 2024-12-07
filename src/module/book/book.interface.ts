import mongoose from 'mongoose'

export interface IBook {
    email: string
    product: mongoose.Schema.Types.ObjectId
    quantity: number
    totalPrice: number
}
