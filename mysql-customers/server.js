const express = require('express');
const app = express();
const router = require('./App/routes');

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

app.use('/', router);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Potato TV extenstion!" });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
