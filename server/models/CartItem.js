const mongoose = require("mongoose");

const cartShema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    title: String,
    price: Number,
    quantity: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model("CartItem", cartShema);