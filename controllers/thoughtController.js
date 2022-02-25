const { User, Thought } = require("../models");

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then(async (thoughts) => {
                return res.status(200).json(thoughts)
            })
            .catch((err) => {
                return res.status(500).json(err)
            });
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then(async (thought) =>
                !user
                    ? res.status(400).json({ message: 'No thought appears with this ID' })
                    : res.status(200).json(user),
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) =>
                User.findOneAndUpdate(
                    { username: thought.username },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                )
            )
            .then((user) => res.status(200).json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidation: true, new: true }
        )
            .select('-__v')
            .then(async (thought) =>
                !thought
                    ? res.status(400).json({ message: 'No thought appears with this ID' })
                    : res.status(200).json(thought),
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({
                        message: 'No thought found with that id',
                    });
                } else {
                    User.findOneAndUpdate(
                        { username: thought.username },
                        { $pull: { thoughts: thought._id } },
                        { new: true }
                    );
                    res.status(200).json('Removed Thought');
                }
            })
            .catch((err) =>
                res.status(500)
                    .json({
                        message: err.message
                    }));
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(400).json({ message: 'Unable to find thought with that ID' })
                    : res.status(200).json(thought)
            )
            .catch((err) =>
                res.status(500)
                    .json({
                        message: err.message
                    }));
    },
    removeReaction(req,res) {
        Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $pull: { reactions: { _id: req.params.reactionId } } },
			{ new: true }
		)
			.then((thought) =>
				!thought
					? res.status(404).json('Unable to find that reaction')
					: res.status(200).json(thought)
			)
			.catch((err) => 
                res.status(500)
                    .json({ message: err.message }));
	},

}