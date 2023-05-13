const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
    console.log("User -> getAllUsers");
    const users = await User.findAll();
    res.json(users);
};
