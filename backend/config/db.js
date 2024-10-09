import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kodijanaka77:com4216@cluster0.at4o0.mongodb.net/wedding');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB connection error:", error);
        process.exit(1); // Exit the process with failure
    }
};
