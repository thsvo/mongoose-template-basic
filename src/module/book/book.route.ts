import { Router } from 'express'
import { bookController } from './Book.controller'

const bookRouter = Router()

bookRouter.get('/:id', bookController.updateBook)

bookRouter.post('/orders', bookController.orderBook)

bookRouter.delete('/:id', bookController.deleteBook)

bookRouter.get('/', bookController.getBooks)

export default bookRouter
