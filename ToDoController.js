const ToDo = require('./ToDoModel');

const ToDoController = {

  createToDo(req, res) {
    console.log(req.body);
    ToDo.create(req.body)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(418).send());
  },

  getToDos(req, res) {
    console.log("trying to get");
    ToDo.find(req.query, (err, found) => {
      if (found) {
        res.send(found);
      } else {
        console.log("error get");
        res.send(err);
      }
    });
  },

  updateToDo(req, res) {
    ToDo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((updatedDoc) => {
        if(!updatedDoc) res.status(418).send('NotFound');
        res.status(200).send(updatedDoc);
      })
      .catch((err) => res.status(418).send());
    },


  deleteToDo(req, res) {
    ToDo.findOneAndRemove( { _id: req.params.id })
      .then((deletedDoc) => {
      if (!deletedDoc) res.status(418).send('Not found');
      res.status(200).send(deletedDoc);
      })
      .catch((err) => res.status(418).send());
  },

};

module.exports = ToDoController;
