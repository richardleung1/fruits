const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
const fruits = require('./models/fruits.js')

// middlewares
app.use(express.urlencoded({extended:false}))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/fruits', function(req, res){
    res.render('Index', { fruits: fruits })
})

app.get('/fruits/new', (req, res) => {
    res.render('New')
})

app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits') //send the user back to /fruits
})

app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('Show', { //second param must be an object
    fruit: fruits[req.params.indexOfFruitsArray]
    })
})    

app.listen(port,() => {
    console.log('listening on port' , port)
})