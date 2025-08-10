import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_KEY).then(() => console.log("DB Connnected"));
    } catch (error) {
        console.log("connection on database has been failed", error);
        process.exit(1);
    }
}