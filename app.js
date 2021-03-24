const express = require('express')
const app = express()
const postsRouter = require('./routes/posts')
const {Post, User, Subbreaddit} = require('./models')

app.set('view engine', 'pug')

app.use(express.urlencoded({extended: true}))

// console.log(postsRouter.toString())
const logReqData = (req, res, next) => {
  // log request path
  console.log('PATH ----', req.path)
  // log request method
  console.log('METHOD ----', req.method)
  next()
}

// app.use(logReqData)

app.use((req, res, next) => {
  console.log('this will be hit second')
  next()
})

app.use((req, res, next) => {
  req.isFunny = true;
  next()
})

// app.use((req, res, next) => {
//   // check to see if user is logged in and authorized
//   if (authorized) {
//     next()
//   } else {
//     res.redirect('/login')
//   }
// })


app.use('/posts', postsRouter)

app.get('/', logReqData, async (req, res) => {
  // res.send('this is express! whoo!!')
  console.log(req.isFunny)
  console.log('this is our index route')
  try {
    const posts = await Post.findAll()
    res.render('index', {title: 'breaddit', posts: posts})
  } catch (e) {
    console.log(e)
  }
})


app.get('/subbreaddits', logReqData, async (req, res) => {
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

app.use((req, res, next) => {
  console.log('end of the chain')
  next()
})


// app.all('*', (req, res) => {
//   res.send('this is a catch all route')
// })

app.listen(8000, () => console.log('listening on port 8000, nice!'))