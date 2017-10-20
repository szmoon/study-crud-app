const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
      username: {type: String, required: true, unique: true},
      password: {type: String, required: true}
});

const users = mongoose.model('users', User);

// You must export your model through module.exports
// The collection name should be 'users'
module.exports = users;