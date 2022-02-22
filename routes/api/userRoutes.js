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

// api/users/:userroute