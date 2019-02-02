const mongoose = require('mongoose');

const Schema = mongoose.Schema;

function validateEmail(email) {
  var emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegexp.test(email);
}

module.exports.createUserModel = function () {
  const userSchema = new Schema({
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address']
    },
    facebookId: String,
  });

  const User = mongoose.model('user', userSchema);
  return User;
}
