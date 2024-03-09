import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bookRoutes from "./routes/book.route.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

dotenv.config()

app.get('/', (req, res) => {
  res.send('BookAPI running')
})

app.use('/api/books', bookRoutes)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to database'))
  .catch(() => console.log('Connection failed'))

app.listen(4000, () => {
  console.log('Server running on port 4000')
})
