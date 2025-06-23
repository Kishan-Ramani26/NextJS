import { NextRequest, NextResponse } from "next/server";
import dbconnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
    await dbconnect();
    try {
        const {email, password} = await req.json();

        const existingUser = await UserModel.findOne({email});

        if(existingUser){
            return NextResponse.json({
                success: false,
                message: "User not found"
            },{status: 400})
        }

        const isValidPassword = await bcrypt.compare(password, existingUser!.password);

        if(!isValidPassword){
            return NextResponse.json({
                success: false,
                message: "Invalid password"
            },{status: 400})
        }

        return NextResponse.json({
            success: true,
            message: "Login successful"
        },{status: 200})

        
    } catch (error) {
        console.error("Error in login route: ", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        },{status: 500})
    }
}
