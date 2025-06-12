import { connectdb } from "@/dbconfig/dbconfig";
import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import User from '@/models/userModel'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import toast, { Toaster } from "react-hot-toast";

connectdb();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;
        console.log(reqBody);

        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 })
            toast.error("User does not exist");
        }
        console.log("user exists");

        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 })
            toast.error("Invalid password");
        }
        console.log(user);

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKNEN_SECRET!, { expiresIn: "1d" })

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        });

        return response;

    } catch (error) {
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}