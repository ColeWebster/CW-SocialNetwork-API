const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: //Use Mongoose ObjectId data type
        }
    },
    {
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        }
    },
    {
        username: {
            type: String,
            required: true,
        }
    },
    {
        createdAt: {
            type: Date,
            default: Date.now,
            //Getting to format the timestamp on query
        }
    },
)

