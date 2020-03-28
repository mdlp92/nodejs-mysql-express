var express = require('express');
const router = express.Router({mergeParams: true});

const customers = require("../controllers/customer.controller.js");

router.get('/', function(req, res, next) {
  res.send('this is for customer info');
})

// Create a new Customer
router.post('/', customers.create);

// GET /customers/ID
router.get('/:customerId', function(req, res, next) {
  res.send('this is customer ID' + req.params.customerId)
})

module.exports = router;
