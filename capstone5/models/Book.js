const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  rating: Number,
  notes: String,
  date_read: Date,
  cover_url: String,
});

module.exports = mongoose.model('Book', bookSchema);
