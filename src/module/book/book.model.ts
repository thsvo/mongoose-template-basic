import mongoose, { model, Schema } from 'mongoose'
import { IBook } from './book.interface'

const bookModel = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
           
        },
        totalPrice: {
            type: Number,
            requred: true,
            min: 0,
        },
    },
    { timestamps: true }
)

const Book = model<IBook>('Book', bookModel)

export default Book
