import { model, Schema } from 'mongoose'
import { IProduct } from './product.interface'
const userSchema = new Schema<IProduct>(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            unique: true,
        },
        category: {
            type: String,
            required: true,
            enum: [
                'Fiction',
                'Science',
                'SelfDevelopment',
                'Poetry',
                'Religious',
            ],
        },
        description: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        inStock: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
)

const Product = model<IProduct>('User', userSchema)

export default Product
