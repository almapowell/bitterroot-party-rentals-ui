require('dotenv').config();
const productRoutes = require('./routes/productRoutes');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());


// -------- Connect to Database -------- //
async function connectDB() {
    try {
        await mongoose.connect(process.env.URI);
        console.log('Connected to MongoDB')
    } catch(error) {
        console.log('Found an error:', error)
    }
}
connectDB();


// -------- Controllers -------- //
app.use('/api/product', productRoutes);


// Select All
// const result = await coll.find().toArray();

// Insert/Post
// const result = await coll.insertMany(products);

// Edit/Update
// const result = await coll.updateOne({ id: 6 }, { $set: { price: 50 } });

// Delete
// const result = await coll.deleteOne({ id: 7 });


app.listen(5000, () => console.log('Listening on port 5000'));