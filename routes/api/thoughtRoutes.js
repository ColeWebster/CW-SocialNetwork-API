const router = require("express").Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thoughtController.js");

// ----- /api/thoughts ------
// get all thoughts
// create a new thought
router.route('/')
    .get(getThoughts)
    .post(createThought);

// get single thought by the id
// update a thought by id
// delete thought by id
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// ----- /api/thoughts/:thoughtId/reactions -----
// create a reaction stored in a single thoughts reactions array field
// delete to pull and remove a reaction by the reactions reactionId value
router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;