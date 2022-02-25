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
// post a new user
router.route('/').get(getUsers).post(createUser);

// get a single User by their id
// put to update a user by its _id
// delete to remove user by its _id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// ---- /api/users/:userId/friends/:friendId ----
// post to add a new friend to users friend list
// Delete to remove a freind from their friend list
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;