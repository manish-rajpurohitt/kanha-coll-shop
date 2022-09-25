require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const { database } = keys;
console.log(database)
const setupDB = async () => {
  try {
    // Connect to MongoDB
    const client = new MongoClient(database.uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
      .catch(err => console.log(err));
  } catch (error) {
    return null;
  }
};

module.exports = setupDB;
