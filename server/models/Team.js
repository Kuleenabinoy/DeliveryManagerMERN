const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
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
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
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
