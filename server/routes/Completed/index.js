const models  = require('../../models');
const express = require('express');
const router  = express.Router();

completedController = {
  //getCompleted gets all of the todo's that are currently completed
  getCompleted(req, res) {
      models.ToDo.findAll({
        where: {
          isCompleted: true,
          isDeleted: false
        },
        order: [['dueDate', 'ASC']]
      })
      .then(allToDo => res.send(allToDo))
      .catch(error => res.send(error))
  }
}

module.exports = completedController;
