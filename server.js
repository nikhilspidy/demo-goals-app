const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/my-goal-app'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/dist/my-goal-app/index.html'));
})

app.listen(process.env.PORT || 8080);
