const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports.createNewsModel = function () {
  const newsSchema = new Schema({
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    category: String,
    language: String,
    country: String,
  });

  const News = mongoose.model('news', newsSchema);
  return News;
}
