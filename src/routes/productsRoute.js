const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

router.route('/')
    .get(productsController.getAllProducts)
    .post(productsController.createProduct);

router.route('/:id')
    .get(productsController.getProductById)
    .put(productsController.updateProduct)
    .patch(productsController.updateProduct)
    .delete(productsController.deleteProduct);

module.exports = router;
