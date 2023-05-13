const express = require('express');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');

function routerApi(app) {
  const router = express.Router();

  router.use('/api/v1/products', productsRouter);
  router.use('/api/v1/users', usersRouter);

  app.use('/api/v1', router);
}

module.exports = routerApi;
