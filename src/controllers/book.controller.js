import Book from '../models/book.model.js'

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({})
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getBook = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id)
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({ meesage: error.message })
  }
}

export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body)
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findByIdAndUpdate(id, req.body)

    if (!book) {
      return res.status(404).json({ message: 'Book not found!' })
    }

    const updatedBook = await Book.findById(id)

    res.status(200).json(updatedBook)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findByIdAndDelete(id)

    if (!book) {
      return res.status(404).json({ message: 'Book not found!' })
    }

    res.status(200).json({ message: 'Book deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
