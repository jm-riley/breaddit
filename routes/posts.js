const express = require('express')
const router = express.Router()
const {Subbreaddit} = require('../models/index')

router.get('/new-post', async (req, res) => {
  const subs = await Subbreaddit.findAll()
  res.render('new-post', {subs})
})

module.exports = router