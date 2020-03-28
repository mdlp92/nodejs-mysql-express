var express = require('express');
const router = express.Router({mergeParams: true})

const meetings = require("../controllers/meeting.controller.js");

router.get('/', function(req, res, next) {
  res.send('this is for meeting info')
})

// Create a new Customer
router.post('/', meetings.create);

// GET /meetings/ID
router.get('/:meetingId', function(req, res, next) {
  res.send('this is meeting ID' + req.params.meetingId)
})

module.exports = router;
