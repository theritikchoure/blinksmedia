const mongoose = require("mongoose");

class Database {
  constructor() {
    if (!Database.instance) {
      this._connect();
      Database.instance = this;
    }
    return Database.instance;
  }

  async _connect() {
    try {
      console.log('mongo url: ', process.env.MONGO_URL)
      await mongoose.connect(process.env.MONGO_URL);
      console.log("MongoDB Connected");
    } catch (err) {
      console.error("MongoDB connection error:", err.message);
      process.exit(1);
    }
  }
}

const instance = new Database();
Object.freeze(instance);

module.exports = instance;
