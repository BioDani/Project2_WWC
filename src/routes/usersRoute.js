const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/userController");

router.route('/')
    .get(userController.getAllUsers);
    //.post(userController.getAllUsers);

//router.route('/:id')
    //.get(userController.getUserById)
    //.put(userController.updateUser)
    //.patch(userController.updateUser)
    //.delete(userController.deleteUser);

module.exports = router;
