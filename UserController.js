const User = require('./UserModel');
// const db = require('./'); want to send db information to the page

//How can I implement db.create, db.find, db.delete?
//Did I need to link to Mongo as well?

const UserController = {};

// Create a new user in the Database
// Their information will be sent in the request body
// This should send the created user

UserController.createUser = (req, res, next) => {
  console.log(req.body);
  User.findOne({ username: req.body.username }, function (err, found) {
    if (!found) {
      User.create({
        username: req.body.username,
        password: req.body.password
      }, (err, doc) => {
        if (err) { res.status(418).send({ error: 'User creation failed!' }) }
        else {
          console.log('User creation success!');
          next();
        }
      })
    }
    else next();
  }
  )
}


// Get a userfrom the database and send it in the response
// Their username will be in the request parameter 'username'
// This should send the found user
UserController.getUser = (req, res, next) => {
  User.find({ username: req.body.username, password: req.body.password }, (err, user) => {
    if (user.length > 0) {
      // res.send(user);
      next();
    }
    if (err) {
      res.status(418).send({ error: 'Could not find user!' })
    }
  })
}



module.exports = UserController;