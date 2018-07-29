//Install express server
const express = require('express');
// const app = express();
// let http = require("http");
//
// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));
//
// const port = process.env.PORT || 8080;
// // Start the app by listening on the default Heroku port
// app.listen(port, "0.0.0.0");


//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-goal-app'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/my-goal-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
