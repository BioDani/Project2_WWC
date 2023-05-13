const {Router} = require('express');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');


router = Router()

router
.get('/v1/products', require('./productsRoute'))
.get('/v1/users', require('./usersRoute'));

module.exports = router;
