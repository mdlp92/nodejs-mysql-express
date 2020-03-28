// Bring in our dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const meetingsRouter = require('./App/routes/meetings');
const customersRouter = require('./App/routes/customers');

app.use('/meetings', meetingsRouter);
app.use('/customers', customersRouter);

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
  res.json({message: 'Welcome to the Potato TV extenstion'});
});

// dependencies for our routes
// require('./App/routes')(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
