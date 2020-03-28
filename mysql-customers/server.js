// Bring in our dependencies
const app = require('express')();
// const routes = require('/routes');

//  Connect all our routes to our application
app.use('/', routes);

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Potato TV extenstion!" });
});

// dependencies for our routes
var routes = require('./App/routes')(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
