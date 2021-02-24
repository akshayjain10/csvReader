const bluebird = require("bluebird");
const mongoose = require("mongoose");
const { mongoDbUrl } = require("../../constant");

let db;

const connectDB = () => {
  mongoose.Promise = bluebird;
  db = mongoose.connection;

  const connectToDatabase = () =>
    mongoose.connect(mongoDbUrl, { useNewUrlParser: true });

  db.on("connecting", () => console.log("Connecting to MongoDB."));

  db.on("error", (error) => {
    console.error(`Error in MongoDB connection: ${error}`);
    mongoose.disconnect();
  });

  db.on("connected", () => {
    console.log("Connected to MongoDB!");
  });

  db.once("open", () => console.log("Connection to MongoDB now open."));

  return connectToDatabase();
};

const getCurrentMongoConnection = () => db;

module.exports = { connectDB, getCurrentMongoConnection };
