import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}
const connection: ConnectionObject = {};

const dbconnect = async (): Promise<void> => {
    if (connection.isConnected) return;

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
        connection.isConnected = db.connections[0].readyState;

        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default dbconnect;