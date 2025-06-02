import { connectdb } from "@/dbconfig/dbconfig";
import { NextResponse, NextRequest } from "next/server";
import User from '@/models/userModel'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

connectdb();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        const user = await User.find

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        console.log("User found", user);

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }
        console.log("Password is valid");

        const tokenData = {
            id: user._id,
            email: user.email,
            username: user.username
        }

        const token = jwt.sign(tokenData, process.env.TOKNEN_SECRET!, { expiresIn: '1h' });

        const response = NextResponse.json({
            message: "Login successfuly",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true,
            expires :Date.now()
        })

        return response;

    } catch (error) {
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}