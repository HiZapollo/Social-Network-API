/* User Model

    1. username
        - String
        - Unique
        - Required
        - Trimmed
    2. email
        - String
        - Required
        - Unique
        - Must match a valid email address
    3. thoughts
        - Array of _id values referencing the Thought model
    4. friends
        - Array of _id values referencing the User model (self-reference)

Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

*/

const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;