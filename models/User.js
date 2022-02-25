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
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            // Look up my REGEX for the match
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            }
        ]
    }, 
    {
        toJSON: { getters: true,},       
    }
)

const User = model("user", userSchema);
//Create a model
module.exports = User;