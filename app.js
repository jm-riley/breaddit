const express = require('express')
const app = express()
const {Post, User} = require('./models')

app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  // res.send('this is express! whoo!!')
  try {
    const posts = await Post.findAll()
    res.render('index', {title: 'breaddit', posts: posts})
  } catch (e) {
    console.log(e)
  }
  
})

app.get('/', (req, res) => {
  // this will never run
  res.send('second index route')
})

app.get('/bananas', (req, res) => {
  res.send('this is bananas, b-a-n-a-n-a-s')
})

app.all('*', (req, res) => {
  res.send('this is a catch all route')
})

app.listen(8000, () => console.log('listening on port 8000, nice!'))