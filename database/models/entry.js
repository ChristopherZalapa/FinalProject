const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  name: String,
  location: String,
  when: Date,
  attended: Boolean
},{timestamps: true});

const Entry = mongoose.model('Entry', EntrySchema);
module.exports = Entry;