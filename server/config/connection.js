const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Delivery-Team", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;
