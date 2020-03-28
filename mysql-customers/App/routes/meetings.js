var express = require('express')
var router = express.Router()

// GET /customers/meeting
router.get('/', function (req, res, next) {
  res.send('this is for meetings info')
});

// GET /customers/meeting/meetingID
router.get('/:id', function (req, res, next) {
  res.send('meetingId' + req.params.customerId + ‘ for customerId' + req.params.meetingID)
})

module.exports = app => {
  const meetings = require("../controllers/meeting.controller.js");

  // Create a new meeting
  app.post("/meetings", meetings.create);
};
