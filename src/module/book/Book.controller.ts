import { Request, Response } from 'express'
import { bookService } from './book.service'
import User from '../user/product.model';

export const orderBook = async (req: Request, res: Response) => {
    try {
      const { email, product, quantity } = req.body;
      const book = await User.findById(product);
  
      if (!book || book.quantity < quantity) {
        return res.status(400).json({
          message: "Insufficient stock",
          success: false,
        });
      }
  
      const totalPrice = book.price * quantity;
  
      const order = await User.create({ email, product, quantity, totalPrice });
  
      book.quantity -= quantity;
      book.inStock = book.quantity > 0;
      await book.save();
  
      res.status(201).json({
        message: "Order created successfully",
        success: true,
        data: order,
      });
    } catch (error) {
      res.status(400).json({
        message: "Order creation failed",
        success: false,
        error,
      });
    }
  };
const getBooks = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await bookService.getBook(id)
        res.send({
            success: true,
            message: 'Books fetched successfully',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Error fetching books',
            error,
        })
    }
}

const updateBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const body = req.body
        const result = await bookService.updateBook(id, body)
        res.send({
            success: true,
            message: 'Book updated successfully',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Error updating book',
            error,
        })
    }
}

const deleteBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await bookService.deleteBook(id)
        res.send({
            success: true,
            message: 'Book deleted successfully',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Error deleting book',
            error,
        })
    }
}

export const bookController = {
    orderBook,
    getBooks,
    updateBook,
    deleteBook,
}
