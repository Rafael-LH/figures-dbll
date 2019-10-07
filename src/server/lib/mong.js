/**
 * Modules
 */
const chalk = require('chalk')
const { MongoClient, ObjectID } = require("mongodb");
const { dbUser, dbPwd, dbName, dbHost, dbPort } = require("../config");

const USER = encodeURIComponent(dbUser);
const PWD = encodeURIComponent(dbPwd);

const MongoUri = `mongodb+srv://${USER}:${PWD}@${dbHost}/${dbName}?retryWrites=true&w=majority`

class MongoLib {
  constructor() {
    this.client = new MongoClient(MongoUri, {  useUnifiedTopology: true, useNewUrlParser: true });
    this.dbName = dbName;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.client.connect(error => {
        if (error) reject(error)
        
        console.log(chalk.green('Connection stablesihd to mongo'))
        resolve(this.client.db(this.dbName))
      })
    })
  }

  getAll(collection, query = {}, proyection = {}) {
    return db.collection(collection).find(query, proyection).toArray()
  }
}

module.exports = MongoLib;
