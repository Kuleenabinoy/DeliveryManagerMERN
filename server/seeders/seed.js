const db = require("../config/connection");
const { User, Team } = require("../models");
const teamSeeds = require("./teamSeeds.json");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
    try {
        await Team.deleteMany({});
        await Team.create(teamSeeds);
        await User.create(userSeeds);

        console.log("all done!");
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
