console.log("file server.js charged");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/products", require("./routes/productRoute"));
app.use("/cart", require("./routes/cartRoute"));

app.get("/", (req, res) => {
    res.send("server running");
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`server started on port ${process.env.PORT || 3001}`);
});