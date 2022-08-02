const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
const mongoose = require('mongoose')
const Fruit = require('./models/fruit.js')
// const fruits = require('./models/fruits.js')


mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

// middlewares
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// app.get('/fruits', function(req, res){
//     res.render('Index', { fruits: fruits })
// })

app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('Index', {
            fruits: allFruits
        })
    })
})

app.get('/fruits/new', (req, res) => {
    res.render('New')
})

// app.post('/fruits', (req, res)=>{
//     if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false
//     }
//     fruits.push(req.body)
//     res.redirect('/fruits') //send the user back to /fruit
// })

app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        // res.send(createdFruit)
        res.redirect('/fruits')
    })
})

app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('Show', {
            fruit:foundFruit
        })
    })
})

// app.get('/fruits/:indexOfFruitsArray', function(req, res){
//     res.render('Show', { //second param must be an object
//     fruit: fruits[req.params.indexOfFruitsArray]
//     })
// })

app.listen(port,() => {
    console.log('listening on port' , port)
})