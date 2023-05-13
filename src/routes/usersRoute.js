const { Router} = require("express");
const usersController = require("../controllers/usersController");

const router = Router();

router.route('/')
    .get(usersController.getAllUsers);

module.exports = router;
