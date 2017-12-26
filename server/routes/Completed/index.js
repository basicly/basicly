const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Promise = require('bluebird');

app.use(express.static(__dirname + '/../client/build'));

// this was a example test route - in the future we should use Express Router in server/routes
app.get('/api', (req, res) => {
  res.send(['rory', 'joe', 'boi']);
});

//proxy 5000
app.listen(5000);
