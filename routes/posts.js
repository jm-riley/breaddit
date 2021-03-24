const express = require('express')
const router = express.Router()
const {Subbreaddit, Post} = require('../models')

router.get('/new-post', async (req, res) => {
  const subs = await Subbreaddit.findAll()
  res.render('new-post', {subs})
})

router.post('/', async (req, res) => {
  console.log('request body', req.body)

  const {title, body, subbreadditId} = req.body
  const post = await Post.create({title, body, subbreadditId, userId: 1})

  // res.send('testing post route')
  res.redirect('/')
})

module.exports = router