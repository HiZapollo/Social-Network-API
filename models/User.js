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