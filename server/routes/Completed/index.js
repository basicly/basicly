const models  = require('../../models');
const express = require('express');
const router  = express.Router();

completedController = {
  getCompleted(req, res) {
      models.ToDo.findAll({
        where: {
          isCompleted: true
        }
      })
      .then(allToDo => res.send(allToDo))
      .catch(error => res.send(error))
  }
}

module.exports = completedController;
