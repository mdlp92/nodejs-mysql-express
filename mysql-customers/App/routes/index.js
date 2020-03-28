const express = require('express');
const router = express.Router({mergeParams: true});
const meetingsRouter = require('./meetings');
const customersRouter = require('./customers');

router.use('/meetings', meetingsRouter);
router.use('/customers', customersRouter);

module.exports = router;
