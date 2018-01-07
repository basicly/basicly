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


    // models.User.create({
    //   username: 'samTheUser',
    //   password: 'haha'
    // }).then(function() {
    //   console.log('we did it');
    //   // res.redirect('/');
    // });



    // models.ToDo.create({
    //     UserId: 1,
    //     isCompleted: false,
    //     isDeleted: false
    //   }).then(function() {
    //     console.log('Todo Created')
    // });

models.User.findAll()
  .then((data) => {
    let date = new Date(data[0].createdAt);
    console.log('hello sir', (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
  });


//Either getting or posting Completed and In Progress To-Do's
// app.get('/completed', completed.postCompleted);
// app.get('/completed', completed.getCompleted);
// app.post('/inprogress', inProgress.postInProgress);
// app.get('/inprogress', inProgress.getInProgress);

//Listening to port
app.listen(5000);
