var express = require('express')
var router = express.Router()

// PUSH / customer
router.get('/', function (req, res, next) {
  res.send('this is the form for customers')
})

module.exports = router
