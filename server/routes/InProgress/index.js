const models  = require('../../models');
const express = require('express');
const router  = express.Router();

inProgressController = {
  postInProgress(req, res) {
    console.log(req.body);
      models.ToDo.create({
        UserId: req.body.UserId,
        IsCompleted: false,
        IsDeleted: false,
        Description: req.body.Description //we can change the req.body.text
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
