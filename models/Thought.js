/* Thought Model

    1. thoughtText
        - String
        - Required
        - 1-280 chars
    2. createdAt
        - Date
        - Set defualt val to current timestamp
        - Use getter method to format timestamp on query
    3. username
        - String
        - Required
    4. reactions
        - Array of nested documents created with the reactionSchema

Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

*/

const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            min_length: 1,
        },
        createdAt: {
            type: Date,
            defualt: () => new Date(),
            get: (date) => {
                return date.toLocaleString();
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;