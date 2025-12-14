const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB ERROR FULL DETAILS 👇");
    console.error(error);   // <-- FULL ERROR OBJECT
    process.exit(1);
  }
};

module.exports = connectDB;
