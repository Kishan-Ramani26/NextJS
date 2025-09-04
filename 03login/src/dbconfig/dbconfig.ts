import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL;
        if (!mongoUrl) {
            throw new Error("MONGO_URL is not defined in environment variables");
        }

        await mongoose.connect(mongoUrl);

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connection successful");
        });

        connection.on("error", (err) => {
            console.log("MongoDB connection error:", err);
            process.exit(1);
        });

    } catch (error) {
        console.log("Error connecting to the database:", error);
    }
}