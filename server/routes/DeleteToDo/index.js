const models  = require('../../models');
const express = require('express');
const router  = express.Router();

deleteToDo = {
  //deleteToDo sets isDeleted to true so that the client does not see
  //any isDeleted that is set to true
  deleteToDo(req, res) {
    models.ToDo.update(
      { isDeleted : req.body.isDeleted },
      { where: { id: req.body.id }}
    )
    .then((data) => res.send(data))
    .catch(error => res.send(error))
  }
}

module.exports = deleteToDo;