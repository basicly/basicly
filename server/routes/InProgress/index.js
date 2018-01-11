const models  = require('../../models');
const express = require('express');
const router  = express.Router();

inProgressController = {
  postInProgress(req, res) {
    console.log('inside post', req.body);
      models.ToDo.create({
        UserId: req.body.userId,
        isCompleted: false,
        isDeleted: false,
        description: req.body.description, //we can change the req.body.text
        dueDate: req.body.dueDate
      })
      .then((data) => res.send(data))
      .catch(error => res.send(error))
  },
  getInProgress(req, res) {
      models.ToDo.findAll({
        IsCompleted: false
      })
      .then(allToDo => res.send(allToDo))
      .catch(error => res.send(error))
  }
}

module.exports = inProgressController;
