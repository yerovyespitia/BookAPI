const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const bookRoutes = require('./routes/book.route')

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
