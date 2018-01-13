const models  = require('../../models');
const express = require('express');
const router  = express.Router();

DeleteToDo = {
  DeleteToDo(req, res) {
    models.ToDo.update(
      { isDeleted : req.body.isDeleted },
      { where: { id: req.body.id }}
    )
    .then((data) => res.send(data))
    .catch(error => res.send(error))
  }
}

module.exports = DeleteToDo;