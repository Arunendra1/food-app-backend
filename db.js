const mongoose = require('mongoose');
const uri = "mongodb+srv://mutursingh1111:3Radhalala@cluster0.eulovtp.mongodb.net/SinghFoodmern?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to database");

        const db = mongoose.connection.db;

        const fetched_data = await db.collection("food_items").find({}).toArray();
        const foodCategory = await db.collection("foodCategory").find({}).toArray();

        global.food_items = fetched_data;
        global.foodCategory = foodCategory;

    } catch (err) {
        console.error("Error connecting to database", err);
    }
};

module.exports = connectDB;
