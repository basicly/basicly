const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Promise = require('bluebird');

app.use(express.static(__dirname + '/../client/public'));

app.listen(5000);
