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

Reaction Schema

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