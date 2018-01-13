const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Promise = require('bluebird');
const completed = require('./routes/Completed');
const inProgress = require('./routes/InProgress');
const deleteToDo = require('./routes/DeleteToDo');
const models = require('./models');
const toggleToDo = require('./routes/ToggleToDo');
const PORT = process.env.PORT || 5000;

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Set Static Path
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static(__dirname + '/../client/build'));
}

// Either getting or posting Completed and In Progress To-Do's
app.get('/completed', completed.getCompleted);
app.post('/inprogress', inProgress.postInProgress);
app.get('/inprogress', inProgress.getInProgress);
app.put('/toggleTodo', toggleToDo.toggleToDo);
app.put('/deleteTodo', deleteToDo.deleteToDo)

// Listening to port
app.listen(PORT);
