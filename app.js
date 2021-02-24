const dbMongoose = require("./src/db/mongoose");

global.__basedir = __dirname;

let app;

async function connectToMongo() {
  await dbMongoose.connectDB();

  app = require("./server.js");
}

connectToMongo();

module.exports = app;
