const models  = require('../../models');
const express = require('express');
const router  = express.Router();

inProgressController = {
  //postInProgress posts a to do into the database
  postInProgress(req, res) {
      models.ToDo.create({
        UserId: req.body.userId,
        isCompleted: false,
        isDeleted: false,
        description: req.body.description,
        dueDate: req.body.dueDate
      })
      .then((data) => res.send(data))
      .catch(error => res.send(error))
  },
  //getInProgress gets all of the todo's that are currently in progress
  getInProgress(req, res) {
      models.ToDo.findAll({
        where: {
          isCompleted: false,
          isDeleted: false
        },
        order: [['dueDate', 'ASC']]
      })
      .then(allToDo => res.send(allToDo))
      .catch(error => res.send(error))
  }
}

module.exports = inProgressController;
