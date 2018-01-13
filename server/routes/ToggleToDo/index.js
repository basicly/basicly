const models  = require('../../models');
const express = require('express');
const router  = express.Router();

ToggleToDo = {
  ToggleToDo(req, res) {
    models.ToDo.update(
      { isCompleted : req.body.isCompleted },
      { where: { id: req.body.id }}
    )
    .then((data) => res.send(data))
    .catch(error => res.send(error))
  }
}

module.exports = ToggleToDo;
