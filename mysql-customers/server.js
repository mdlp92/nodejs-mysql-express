// Bring in our dependencies
<<<<<<< HEAD
const app = require('express')();
// const routes = require('/routes');

// dependencies for our routes
var routes = require('./App/routes')(app);
=======
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
>>>>>>> c120a47ae462b58a346560a6c27f2282c4085e31

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

<<<<<<< HEAD
=======
// dependencies for our routes
// require('./App/routes')(app);

>>>>>>> c120a47ae462b58a346560a6c27f2282c4085e31
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
