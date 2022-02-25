const { Thought, User } = require("../models");

module.exports = {
    getThoughts(req,res) {
        Thought.find().then(async (thoughts) => {
            return res.status(200).json(thoughts);
        }).catch((err) => {
            return res.status(500).json(err);
        });
    },
    getSingleThought(req,res) {
        Thought.findOne({ _id: req.params.thoughtId})
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
            .then((user) => res.status(200).json(thought))
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req,res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidation: true, new: true}
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
    deleteThought(req,res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId})
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID'})
                    : res.status(200).json({message: 'Thought successfully removed'})
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    }
}