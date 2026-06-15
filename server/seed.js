const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://127.0.0.1:27017/shopDB");

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