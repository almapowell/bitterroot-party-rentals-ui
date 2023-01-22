require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const requestRoutes = require("./routes/requestRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");
const app = express();

app.use(cors());
app.use(express.json());

// -------- Connect to Database -------- //
async function connectDB() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Found an error:", error);
  }
}
connectDB();

app.get("/api", (req, res) => {
  res.send("HELLO WORLD");
});

// -------- Controllers -------- //
app.use("/api/product", productRoutes);
app.use("/api/request", requestRoutes);

if (process.env.DEVELOPMENT) {
  const PORT = 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
}

module.exports.handler = serverless(app);

// Select All
// const result = await coll.find().toArray();

// Insert/Post
// const result = await coll.insertMany(products);

// Edit/Update
// const result = await coll.updateOne({ id: 6 }, { $set: { price: 50 } });

// Delete
// const result = await coll.deleteOne({ id: 7 });
