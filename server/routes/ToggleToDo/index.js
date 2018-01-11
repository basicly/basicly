const models  = require('../../models');
const express = require('express');
const router  = express.Router();

ToggleToDo = {
  ToggleToDo(req, res) {
    console.log('AM I GETTING TO TOGGLE');
    models.ToDo.update(
      { IsCompleted : req.body.IsCompleted },
      { where: { id: req.body.id }}
    )
    .then((data) => res.send(data))
    .catch(error => res.send(error))
  }
}

module.exports = ToggleToDo;
