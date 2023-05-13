const { DataTypes, Model } = require('sequelize');
const sequelize = require("../utils/postgresql");

class User extends Model {}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
}, {
    sequelize,
    modelName: 'User'
})

module.exports = User;
