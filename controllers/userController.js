const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find().then(async (users) => {
            const userObj = { users };
            return res.json(userObj);
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
    },
    getSingleUser(req, res) {
        
    }
}