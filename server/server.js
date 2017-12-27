const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Promise = require('bluebird');
const completed = require('./routes/Completed/index.js');
const inProgress = require('./routes/InProgress/index.js');

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Set Static Path
app.use(express.static(__dirname + '/../client/build'));

//Either getting or posting Completed and In Progress To-Do's
// app.get('/completed', completed.postCompleted);
// app.get('/completed', completed.getCompleted);
// app.post('/inprogress', inProgress.postInProgress);
// app.get('/inprogress', inProgress.getInProgress);

//Listening to port
app.listen(5000);
