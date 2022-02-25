const { User, Thoughts } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find().then(async (users) => {
            return res.status(200).json(users);
        }).catch((err) => {
                return res.status(500).json(err);
        });
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (user) =>
                !user
                    ? res.status(400).json({ message: 'No user appears with this ID' })
                    : res.status(200).json(user),
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.status(200).json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidation: true, new: true}
        )
        .select('-__v')
            .then(async (user) =>
                !user
                    ? res.status(400).json({ message: 'No user appears with this ID' })
                    : res.status(200).json(user),
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    deleteUser(req, res) {
      // Find a simple delete by ID    
      User.findOneAndRemove({_id: req.params.userId})
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID'})
                : Thought.deleteMany({ username: user.username})
            )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'User removed, but no thoughts found'})
                    : res.json({message: 'User successfully deleted'})
            )
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        //--------- Reference Mini Project Courses
        //https://docs.mongodb.com/manual/reference/operator/update/addToSet/
        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$addToSet: {friend: req.params.friendId}},
            {new: true},
        )
        .then((user) =>
        !user
            ? res.status(404).json({ message: 'No user with that ID'})
            : res.status(200).json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res) {
        // --- https://docs.mongodb.com/manual/reference/operator/update/pull/
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friend: req.params.friend}},
            {new: true},
        )
        .then((user) =>
        !user
            ? res.status(404).json({ message: 'No user with that ID'})
            : res.status(200).json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
};  