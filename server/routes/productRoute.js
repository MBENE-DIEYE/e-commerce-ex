const express = require("express");
const router = express.Router();

const {
    createProducts,
    getProducts,
    deleteProduct
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/", createProducts);
router.delete("/:id", deleteProduct);

module.exports = router;