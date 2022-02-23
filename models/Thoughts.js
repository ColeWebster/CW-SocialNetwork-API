const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
       thoughtText: {
           type: String,
           required: true,
           minLength: 1,
           maxLength: 280,
       }
    },
    {
        createdAt: {
            type: Date,
            default: Date.now,
            // Getter to format the timestamp on query
        }
    },
    {
       username: {
            type: String,
            required: true,
       }
    },
    {
        reactions: [
            type: Schema.Types.ObjectId,
            ref: "Reaction"
        ]
    },
    {
        toJSON: {
            virtuals: true,
            // reactionCount = length of the thoughts reactions array field on query
        },
        id: false,
    }
)

const Thoughts = model("Thoughts", thoughtSchema);

module.exports = Thoughts;