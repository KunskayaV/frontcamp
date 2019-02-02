const mongoose = require('mongoose');
const { noop } = require('lodash');

const { createNewsModel, createUserModel } = require('./models');
const { NewsTemplate, UserTemplate } = require('./templates');

let dbase = null;
const News = createNewsModel();
const User = createUserModel();
const addNewsDB = data => News.create(new NewsTemplate(data));
const addUserDB = data => User.create(new UserTemplate(data));

function connectToDatabase(url) {
  mongoose.connect(url);
  dbase = mongoose.connection;
  dbase.on('error', error => console.log('error', error));
  dbase.once('open', () => console.log('Database connection estabished'));
}

function findInDataBase({ db = dbase, collectionName, query = {}, callback = noop }) {
  const collection = db.collection(collectionName);

  collection
    .find(query)
    .toArray(
      (err, result) => {
        if (err) console.log('Find in database error', err.message);
        callback(err, result);
      }
    );
}

function updateInDataBase({
  db = dbase,
  collectionName,
  query = {},
  data = {},
  options = {},
  callback = noop
}) {
  const collection = db.collection(collectionName);

  collection.update(query, data, options, callback);
}

function deleteFromDatabase({ db = dbase, collectionName, options = {}, callback = noop }) {
  const collection = db.collection(collectionName);

  collection
    .deleteOne(
      options,
      (err, result) => {
        if (err) console.log('Delete news in database error', err.message);

        callback(err, result);
      }
    );
}

module.exports = {
  connectToDatabase,
  findInDataBase,
  addNewsDB,
  addUserDB,
  updateInDataBase,
  deleteFromDatabase,
};
