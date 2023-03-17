const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/", // need link to db
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set("debug", true);


module.exports = mongoose.connection;