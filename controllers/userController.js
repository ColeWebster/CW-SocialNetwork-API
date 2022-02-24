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
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (user) =>
                !user
                    ? res.status(400).json({ message: 'No user appears with this ID' })
                    : res.json({
                        user,
                        thought: await thought(req.params.thoughtId),
                    })
            ).catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        // Find more examples
    },
    deleteUser(req, res) {
      // Find a simple delete by ID    
      User.findOneAnDelete({_id: req.params.userId})
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID'})
                : Reaction.deleteMany({_id: {
                    $in: user.reaction} })
        )
        .then(() => res.json({ message: 'User and associated apps deleted!' }))
      .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        // --------- See Activity26 on Tags
        // addTag(req, res) {
        //     Application.findOneAndUpdate(
        //       { _id: req.params.applicationId },
        //       { $addToSet: { tags: req.body } },
        //       { runValidators: true, new: true }
        //     )
        //       .then((application) =>
        //         !application
        //           ? res.status(404).json({ message: 'No application with this id!' })
        //           : res.json(application)
        //       )
        //       .catch((err) => res.status(500).json(err));
        //   },
    },
    removeFriend(req, res) {
        // -------------- See Activity26 on Tags
        // removeTag(req, res) {
        //     Application.findOneAndUpdate(
        //       { _id: req.params.applicationId },
        //       { $pull: { tags: { responseId: req.params.tagId } } },
        //       { runValidators: true, new: true }
        //     )
        //       .then((application) =>
        //         !application
        //           ? res.status(404).json({ message: 'No application with this id!' })
        //           : res.json(application)
        //       )
        //       .catch((err) => res.status(500).json(err));
        //   },
    },
};  