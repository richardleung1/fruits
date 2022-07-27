const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
const fruits = require('./models/fruits.js')

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(port,() => {
    console.log('listening on port' , port)
})