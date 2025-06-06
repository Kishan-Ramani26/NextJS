import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";


export const  getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value||"";
        
        const decodedtoken:any = jwt.verify(token, process.env.JWT_SECRET as string)

        return  decodedtoken.id;


    } catch (error) {
        throw new Error("Failed to get data from token");
    }
}