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

// api/user routes
router.route('/').get(getUsers).post(createUser);

//Api/users/:userID
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// post a new user

// put to update a user by its _id

// delete to remove user by its _id

module.exports = router;