const { Schema, model } = require('mongoose');
const formatDate = (date) => date.toLocalString();

const reactionSchema = new Schema(
    {
        reactionId: {
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
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //Getting to format the timestamp on query
            get: formatDate,
        }
    }
);

module.exports = reactionSchema;