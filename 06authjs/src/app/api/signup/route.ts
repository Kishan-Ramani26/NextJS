import { NextRequest, NextResponse } from "next/server";
import dbconnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerficationEmail";
import crypto from "crypto";

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
            isVerified: false,
            isAcceptingMessages: true,
            messages: [],
            verificationCode: crypto.randomBytes(32).toString("hex")
        })

        const verificationEmail = await sendVerificationEmail(email, username, newUser.verificationCode);
        if(!verificationEmail.success){
            return NextResponse.json({
                success: false,
                message: "Error sending verification email"
            },{status: 500})
        }

        return NextResponse.json({
            success: true,
            message: "User created successfully",
            user: newUser
        },{status: 201})

    } catch (error) {
        console.error("Error in signup route: ", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}

