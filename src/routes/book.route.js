const express = require('express')
const router = express.Router()

const {
  getBooks,
  addBook,
  getBook,
  updateBook,
  deleteBook,
} = require('../controllers/book.controller')

router.get('/', getBooks)
router.get('/:id', getBook)
router.post('/', addBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router
