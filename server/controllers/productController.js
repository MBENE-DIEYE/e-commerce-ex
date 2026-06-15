const Product = require("../models/Product");

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE PRODUCT
const createProducts = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    createProducts,
    deleteProduct,
};