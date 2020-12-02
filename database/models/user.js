const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  bio: String,
  email: {type: String, unique: true, required: true},
  parties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'entry'
  }]
})

const User = mongoose.model('User', UserSchema);
module.exports = User;