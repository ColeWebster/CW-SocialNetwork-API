const router = require("express").Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../controllers/userController")

// -------- /api/users -----------
// get all Users
router.route('/').get(getUsers);

// get a single User by their id
router.route('/:userId').get(getSingleUser);

// post a new user
router.route('/').post(createUser);

// put to update a user by its _id
router.route('/:userId').put(updateUser);

// delete to remove user by its _id
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// ---- /api/users/:userId/friends/:friendId ----
// post to add a new friend to users friend list
router.route('/:userId/friends/:friendId').post(addFriend);

// Delete to remove a freind from their friend list
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;