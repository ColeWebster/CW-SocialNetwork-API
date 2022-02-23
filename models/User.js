const { Schema, model } = require('mongoose');

//Create a new schema that will have table columns and export it
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: 
            // Look up my REGEX for the match
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            }
        ]
    }, 
    {
        toJSON: {
            virtuals: true,
            // Friend Count here
        },
        id: false,    
    }
)

const User = model("User", userSchema);
//Create a model
module.exports = User;