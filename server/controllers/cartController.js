const CartItem = require("../models/CartItem");

// GET CART
const getCart = async (req, res) => {
    try {
        const cart = await CartItem.find();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ADD TO CART
const addToCart = async (req, res) => {
    try {
        const { productId, title, price } = req.body;

        const existing = await CartItem.findOne({ productId });

        if (existing) {
            existing.quantity += 1;
            await existing.save();
            return res.json(existing);
        }

        const item = await CartItem.create({
            productId,
            title,
            price,
            quantity: 1,
        });

        res.json(item);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// REMOVE FROM CART
const removeFromCart = async (req, res) => {
    const item = await CartItem.findById(req.params.id);

    if (!item) {
        return res.status(404).json({ msg: "not found" });
    }

    item.quantity -= 1;

    if (item.quantity <= 0) {
        await item.deleteOne();
        return res.json({ message: "deleted" });
    }

    await item.save();
    res.json(item);
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart
};