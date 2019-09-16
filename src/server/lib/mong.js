/**
 * Modules
 */
const { MongoClient, ObjectID } = require("mongodb");
const { dbUser, dbPwd, dbName, dbHost, dbPort } = require("../config");

const USER = encodeURIComponent(dbUser);
const PWD = encodeURIComponent(dbPwd);

const MongoUri = `mongodb://${USER}:${PWD}@${dbHost}:${dbPort}?retryWrites=true`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MongoUri, { newParser: true });
    this.dbName = dbName;
  }
}

module.exports = MongoLib;
