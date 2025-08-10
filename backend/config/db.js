import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mrunmaynawghare:Munnabhai13@cluster0.nldsq.mongodb.net/food-del").then(() => console.log("DB Connnected"));
    } catch (error) {
        console.log("connection on database has been failed", error);
        process.exit(1);
    }
}