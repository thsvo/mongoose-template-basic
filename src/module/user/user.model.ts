import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'
const userSchema = new Schema<IUser>(
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

const User = model<IUser>('User', userSchema)

export default User
