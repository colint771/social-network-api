const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://colint771:Hartwell230pc!@social-network-api.gcd7c6m.mongodb.net/test", // need link to db
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set("debug", true);


module.exports = mongoose.connect;