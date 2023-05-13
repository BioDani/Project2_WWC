const { Sequelize } = require("sequelize");
require('dotenv').config();

module.exports = new Sequelize(process.env.POSTGRESQL_CONNECTION,{
  dialect: 'postgres',
  logging: false,
});
