const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
       thoughtText: {
           type: String,
           required: true,
           minLength: 1,
           maxLength: 280,
       },
       createdAt: {
           type: Date,
           default: Date.now,
           // Getter to format the timestamp on query
           //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
           get: (value) => value.toDateString(),
        },
        username: {
            type: String,
            required: true    
        },
        reactions: [
            reactionSchema
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);
    
// reactionCount = length of the thoughts reactions array field on query
// -------- Activity 22 -------------
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
});


const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;