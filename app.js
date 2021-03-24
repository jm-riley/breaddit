const express = require('express')
const app = express()
const postsRouter = require('./routes/posts')
const {Post, User, Subbreaddit} = require('./models')

app.set('view engine', 'pug')

app.use('/posts', postsRouter)

app.get('/', async (req, res) => {
  // res.send('this is express! whoo!!')
  
  try {
    const posts = await Post.findAll()
    res.render('index', {title: 'breaddit', posts: posts})
  } catch (e) {
    console.log(e)
  }
})


app.get('/subbreaddits', async (req, res) => {
  // query db for all subbreaddits
  const subbreaddits = await Subbreaddit.findAll()
  // render subbreaddits template
  res.render('subbreaddits', { subbreaddits, title: 'subbreaddits' })
})

app.get('/subbreaddits/:id', async (req, res) => {
  // req.params => {id: 3}
  const sub = await Subbreaddit.findByPk(req.params.id, {
    include: Post
  })

  // sub => {id: 1, name: 'jokes', Posts: [{id: 1, body: 'great joke'}]}
  res.render('subbreaddit', {sub})
})

app.get('/', (req, res) => {
  // this will never run
  res.send('second index route')
})

app.get('/bananas', (req, res) => {
  res.send('this is bananas, b-a-n-a-n-a-s')
})


// app.all('*', (req, res) => {
//   res.send('this is a catch all route')
// })

app.listen(8000, () => console.log('listening on port 8000, nice!'))