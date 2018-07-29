//Install express server
const express = require('express');
const app = express();
let http = require("http");

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

const port = process.env.PORT || 8080;
// Start the app by listening on the default Heroku port
app.listen(port, "0.0.0.0");
