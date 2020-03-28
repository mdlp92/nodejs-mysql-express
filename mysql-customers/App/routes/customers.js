var express = require('express')
var router = express.Router()
var meeting = require('./meeting')

// GET /foo
router.get('/', function (req, res, next) {
  res.send('this is for customer info')
})

// GET /customers/meetings
router.use('/meeting', meeting) // tell the router to use meetings.js for child routes

// GET /customers/ID
router.get('/:customerId', function (req, res, next) {
  res.send('this is customer ID' + req.params.customerId)
})

module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // Create a new Customer
  app.post("/customers", customers.create);
};
