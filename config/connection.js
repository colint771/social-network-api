const mongoose = require("mongoose");
const dotenv= require("dotenv");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://colint771:%3Cpassword%3E@social-network-api.gcd7c6m.mongodb.net/test", // need link to db
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set("debug", true);


module.exports = mongoose.connect;