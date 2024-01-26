require("dotenv").config();
const inventoryRoutes = require("./routes/inventoryRoutes");
const productRoutes = require("./routes/productRoutes");
const requestRoutes = require("./routes/requestRoutes");
// const emailRoutes = require("./routes/emailRoutes");
const reviewsRoutes = require("./routes/reviewsRoutes");
const archiveRoutes = require("./routes/archiveRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");
const app = express();

app.use(cors());
app.use(express.json());

console.log(1111111, process.env.URI, process.env.STREAM_ID)

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
app.use("/api/inventory", inventoryRoutes);
app.use("/api/product", productRoutes);
app.use("/api/request", requestRoutes);
// app.use("/api/email", emailRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/archives", archiveRoutes);

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
