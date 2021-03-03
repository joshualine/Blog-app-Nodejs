
//-----IMPORTS-----//
const express = require('express')
// const path = require('path')
const ody
const ejs = require('ejs')
const mongoose = require('mongoose');

//-----Connecting mongoose-----//
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})

//------INITIALIZATION------//
const app = new express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.listen(3000, () => {
  console.log("App listening on port 3000")
})

//------ROUTES AND HANDLERS--------//
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
  res.render('index');
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})
app.get('/post', (req, res) => {
  res.render('post')
})
app.get('/posts/new', (req, res) => {
  res.render('create')
})

app.post('/posts/store', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})






//
