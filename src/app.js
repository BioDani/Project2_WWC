const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');
const sequelize = require('./utils/postgresql');

require('dotenv').config();

const PORT = process.env.PORT || 3000,
app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));



const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();


    await mongoose.connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });


    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}.`);
    });

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
