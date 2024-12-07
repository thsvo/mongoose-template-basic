import { IBook } from './book.interface'
import Book from './book.model'

const createBook = async (payload: IBook) => {
    const result = await Book.create(payload)
    return result
}

const getBook = async (id: string) => {
    const result = await Book.findById(id)
    return result
}

const updateBook = async (id: string, payload: Partial<IBook>) => {
    const result = await Book.findByIdAndUpdate(id, payload, { new: true })
    return result
}

const deleteBook = async (id: string) => {
    const result = Book.findByIdAndDelete(id)
    return result
}

export const bookService = {
    createBook,
    getBook,
    updateBook,
    deleteBook,
}
