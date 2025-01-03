import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const databaseUrl: string = process.env.DATABASE_URL || "";
const closeDb = async () => {
    await mongoose.connection.close();
    console.log("Database connection closed");
};
const db = async () => {
    try {
        if (!databaseUrl) {
            console.log("Database url is not set");
            return;
        } else {
            await mongoose.connect(databaseUrl);
            console.log("Database connected successfully");
        }
    } catch (error) {
        closeDb();
    }
};
db();
export const dbConnection = mongoose;