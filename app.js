const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')


app.use(express.static('style'))

const host = 'localhost'
const port = 8000
app.get('', (req , res) => {
    res.status(200)
    res.sendFile(__dirname+"/index.html")
})

app.get('/about', (req , res) => {
    res.status(200)
    res.sendFile(__dirname+"/about.html")
})




app.listen(port,host, (e) => {
    console.log(`http://${host}:${port}`)
})