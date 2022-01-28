const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    siteInfo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    items: [
        {
            type: String,
            trim: true,
        },
    ],
});

const Team = model("Team", teamSchema);

module.exports = Team;
