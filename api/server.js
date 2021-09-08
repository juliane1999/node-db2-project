const express = require("express")

const server = express()

server.use(express.json())

server.use('*', (req,res,next) => {
    next({status:404, message:'not found'})
})

server.use((err,req,res) => {
    res.status(err.status || 500).json({
        message: err.messagw
    })
})

module.exports = server
