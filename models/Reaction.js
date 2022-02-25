const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            //Use Mongoose ObjectId data type
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        }
        createdAt: {
            type: Date,
            default: Date.now,
            //Getting to format the timestamp on query
            get: (value) => value.toDateString(),
        }
    }
);

module.exports = reactionSchema;