/* Reaction Schema

    1. reactionId
        - Use Mongoose's ObjectId datatype
        - Default value is set to a new ObjectId
    2. reactionBody
        - String
        - Required
        - 280 max char
    3. username
        - String
        - Required
    4. createdAt
        - Date
        - Set defualt val to current timestamp
        - Use getter method to format timestamp on query
    
Not a model, used as reaction field's subdocument in the Thought model 

*/

const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            defualt: Date.now(),
            get: (date) => {
                return date.toLocaleString();
            },
        }
        
    }
);

module.exports = reactionSchema;