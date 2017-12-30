const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Promise = require('bluebird');
// const completed = require('./routes/Completed/index.js');
// const inProgress = require('./routes/InProgress/index.js');
// const deleteTodo = require('./routes/Delete/index.js');
const models = require('./models');

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Set Static Path
app.use(express.static(__dirname + '/../client/build'));

//Temporarily adding this back in - Need it to render for current test
app.get('/api', (req, res) => {
   res.send(['rory', 'joe', 'boi']);
});

models.sequelize.sync({force: false})
  .then(() => {
    models.User.create({
      username: 'roryTheUser'
    }).then(function() {
      console.log('we did it');
      // res.redirect('/');
    });
  });

//Either getting or posting Completed and In Progress To-Do's
// app.get('/completed', completed.postCompleted);
// app.get('/completed', completed.getCompleted);
// app.post('/inprogress', inProgress.postInProgress);
// app.get('/inprogress', inProgress.getInProgress);

//Listening to port
app.listen(5000);
