# Basicly

Welcome! Basicly is a task app for teams.

## Current capabilities

Current functionality is... basic :) In this version, we've included everything you need to effectively manage your tasks throughout the day.

Add tasks to track your workflow, and assign a due date to stay organized:

[Add a task](https://cl.ly/0e0F1z2b242l)

Mark tasks as completed to clear your Todo list:

[Mark task as complete](https://cl.ly/2H2i2S2l2h2q)

Delete tasks when you no longer need to view them:

[Delete a task](https://cl.ly/210m1y1n2R3k)

## Upcoming capabilties

Basicly is a task app for teams, so future versions will support more team-based features that help you work and plan alongside colleagues.

- Edit a task description and due date
- User-based authentication
- Team-based sign up
- User profile image
- Assign a task to a team member
- Activity and due date notifications

## Under the hood

Basicly is a NodeJS application built with Express and React. It features persisent data storage using PostgresQL, and utilizes Sequelize as an ORM layer. It has been optimized for deployment on Heroku.

## Starting the app

Make sure you have PostgresQL installed and running on your machine. Then, from the project root directoy, start the server by runnning:

```
npm install
npm start
```

Then, run the following commands in `/client`:

```
npm install
npm start
```

## Routes in Basicly

```
app.get('/completed', completed.getCompleted);
app.post('/inprogress', inProgress.postInProgress);
app.get('/inprogress', inProgress.getInProgress);
app.put('/toggleTodo', toggleToDo.ToggleToDo);
app.put('/deleteTodo', deleteToDo.DeleteToDo)
```

### Completed

#### getCompleted
```
app.get('/completed', completed.getCompleted);
```
This will get all of the completed todo list entries from the database.

### InProgress

#### postInProgress
```
app.post('/inprogress', inProgress.postInProgress);
```
This will post a new todo entry to the database.

#### getInProgress
```
app.get('/inprogress', inProgress.getInProgress);
```
This will get all of the in progress todo list entries from the database.

### ToggleToDo

#### toggleToDo

```
app.put('/toggleTodo', toggleToDo.ToggleToDo);
```
This will either update the todo list entry to either be complete or incomplete.

### DeleteToDo

#### deleteToDo
```
app.put('/deleteTodo', deleteToDo.DeleteToDo)
```
This will update the database so that the todo list entry - isDeleted - is set the true.

## React components

- Rory to fill this out

## Deploying to Heroku

Basicly is optimized for deployment to Heroku. In this documentation, we'll provide step-by-step instructions for how to do this.

### Deploy the client and server

If you just want to get started deploying the client and the server, follow these instructions. Eventually, when you add support for a Heroku database, a single deployment command will deploy the backend database as well.

#### Create a bundle.js file
From the root directory, run:

```
cd client
npm run build
```

#### Create a Heroku app

Make sure you have a Heroku account set up and have installed the Heroku CLI. Then from the root directory run:

```
heroku create
```

#### Push to Heroku

From the root directory run:

```
git push heroku master
```

By default, Heroku ignores all attempts to push non-master branches. If you want to push a local non-master branch, run:

```
git push heroku branch:master
```

## Deploying the database

In this section, we'll cover how to add a Heroku database to the application, and deploy everything with the usual command.

#### Add support for PostgresQL

Heroku has a free hobby tier for the Postgress add-on that you can subscribe to. You can do this through their admin console, or you can do this on the command line:

```
heroku addons:create heroku-postgresql:<PLAN_NAME>
```

Use `hobby-dev` in place of `<PLAN_NAME>` if you want the free plan.

#### Configure environment variables

In the admin console for your Heroku app, set the Config Vars properly:

[Setting config vars](https://cl.ly/333d35032310)

#### Deploy to Heroku

From the root directory run:

```
git push heroku master
```

#### Create user in Postgres

You must insert a user into the `Users` table since the client hard codes all ToDos to have a `UserId=1`. The user you insert into the table must have an `id=1`

Example insert statement: `INSERT INTO "Users" (username, password, "createdAt", "updatedAt") VALUES ('TestUser', 'password', '2018-01-11', '2018-01-11')`