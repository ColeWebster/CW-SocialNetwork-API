const router = require("express").Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thoughtController")

// ----- /api/thoughts ------
// get all thoughts
router.route('/').get(getThoughts);

// get single thought by the id
router.route('/:thoughtId').get(getSingleThought);

// create a new thought
router.route('/').post(createThought);

// update a thought by id
router.route('/:thoughtId').put(updateThought);

// delete thought by id
router.route('/:thoughtId').delete(deleteThought);

// ----- /api/thoughts/:thoughtId/reactions -----
// create a reaction stored in a single thoughts reactions array field
router.route('/api/thoughts/:thoughtId/reactions').post(addReaction);

// delete to pull and remove a reaction by the reactions reactionId value
router.route('/api/thoughts/:thoughtId/reactionId').delete(removeReaction);