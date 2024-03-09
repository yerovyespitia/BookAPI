const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('BookAPI running')
})

app.listen(4000, () => {
  console.log('Server running on port 4000')
})
