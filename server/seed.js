const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shopDB";
mongoose.connect(mongoUri);

async function seed() {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        const products = data.products.map(p => ({
            title: p.title,
            price: p.price,
            thumbnail: p.thumbnail
        }));

        await Product.insertMany(products);

        console.log("Products imported!");

        await mongoose.connection.close();

    } catch (err) {
        console.log(err);
    }
}

seed();