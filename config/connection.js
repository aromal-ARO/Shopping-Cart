const MongoClient = require('mongodb').MongoClient;

const state = {
  db: null,
};

module.exports.connect = function (done) {
  const url = "mongodb://localhost:27017";
  const dbname = 'shopping';

  MongoClient.connect(url)
    .then((client) => {
      state.db = client.db(dbname); // Correct way to select a database
      done();
    })
    .catch((err) => {
      done(err);
    });
};

module.exports.get = function () {
  return state.db;
};
