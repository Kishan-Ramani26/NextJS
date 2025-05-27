import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL!) 
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