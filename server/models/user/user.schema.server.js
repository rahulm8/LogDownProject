var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  mail: String,
  firstName: String,
  lastName: String,
  facebook: {
    id:    String,
    token: String
  },
  roles: [{
    type: String,
    default: 'USER',
    enum: ['ADMIN', 'USER']}]
}, {collection: 'user'});

module.exports = UserSchema;
