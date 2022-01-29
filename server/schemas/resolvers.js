const { AuthenticationError } = require("apollo-server-express");
const { Team, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate("teams");
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate("teams");
        },
        teams: async () => {
            return Team.find();
        },

        team: async (parent, { teamId }) => {
            return Team.findOne({ _id: teamId });
        },
        me: async (root, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate("teams");
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },

    Mutation: {
        addUser: async (parent, { username, useremail, usercategory, password }) => {
            const user = await User.create({ username, useremail, usercategory, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { useremail, password, usercategory }) => {
            const user = await User.findOne({ useremail, usercategory });

            if (!user) {
                throw new AuthenticationError("No user found with this email address");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);

            return { token, user };
        },
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
