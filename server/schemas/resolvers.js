const { AuthenticationError } = require("apollo-server-express");
const { Team, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        teams: async () => {
            return Team.find();
        },

        team: async (parent, { teamId }) => {
            return Team.findOne({ _id: teamId });
        },
    },

    Mutation: {
        addTeam: async (parent, { name, siteInfo, email }) => {
            return Team.create({ name, siteInfo, email });
        },
        addItem: async (parent, { teamId, item }) => {
            return Team.findOneAndUpdate(
                { _id: teamId },
                {
                    $addToSet: { items: item },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeTeam: async (parent, { teamId }) => {
            return Team.findOneAndDelete({ _id: teamId });
        },
        removeItem: async (parent, { teamId, item }) => {
            return Team.findOneAndUpdate({ _id: teamId }, { $pull: { items: item } }, { new: true });
        },
    },
};

module.exports = resolvers;
