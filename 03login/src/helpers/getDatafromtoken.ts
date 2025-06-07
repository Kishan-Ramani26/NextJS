import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";


export const  getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value||"";
        jwt.verify(token, process.env.JWT_SECRET as string)

        
    } catch (error) {
        throw new Error("Failed to get data from token");
    }
}