const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongo");

async function connectDb() {
  await mongoose.connect(db);
}
module.exports = connectDB;
