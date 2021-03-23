const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('src'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src','portfolio.html'))
})

app.listen(2000)