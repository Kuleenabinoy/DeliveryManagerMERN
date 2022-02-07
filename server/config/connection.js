const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://kuleena:rootroot@cluster0.xsrir.mongodb.net/Delivery-Team?retryWrites=true&w=majority" ||
        "mongodb://localhost/Delivery-Team",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

module.exports = mongoose.connection;
