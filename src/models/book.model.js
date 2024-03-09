import mongoose from 'mongoose'

const BookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter a title'],
    },
    author: {
      type: String,
      required: [true, 'Please enter an author'],
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const Book = mongoose.model('Book', BookSchema)

export default Book
