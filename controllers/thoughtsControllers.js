/* 

/api/thoughts
    - GET to get all thoughts
    - GET to get a single though by _id
    - POST to create a new thought (push created thought's _id to associated user's thoughts array)
    - PUT to update a thought by _id
    - DELETE to remove a thought by _id

/api/thoughts/:thoughtId/reactions
    - POST to create a reaction stored in a single thought's reactions array field
    - DELETE to pull and remove a reaction by the reation's reactionId value

*/
