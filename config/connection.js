const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "", // need link to db
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set("debug", true);


module.exports = mongoose.connect;