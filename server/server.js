const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
