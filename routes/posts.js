const express = require('express')
const router = express.Router()
const csrf = require('csurf')
const {Subbreaddit, Post} = require('../models')

const csrfProtection = csrf({cookie: true})

router.get('/new', csrfProtection, async (req, res) => {
  const subs = await Subbreaddit.findAll()
  res.render('new-post', {subs, csrfToken: req.csrfToken()})
})

router.post('/', csrfProtection, async (req, res) => {
  console.log('request body', req.body)

  const {title, body, subbreadditId} = req.body
  const post = await Post.create({title, body, subbreadditId, userId: 1})

  // res.send('testing post route')
  res.redirect('/')
})

module.exports = router