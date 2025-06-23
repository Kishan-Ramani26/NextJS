import { NextRequest, NextResponse } from "next/server";
import dbconnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerficationEmail";


export async function POST(req: NextRequest) {
    await dbconnect();
    try {
        const { username, email, password } = await req.json();
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: "User already exists"
            }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            username,
            email,
            password: hashedPassword,
        })

        

    } catch (error) {
        console.error("Error in signup route: ", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}

