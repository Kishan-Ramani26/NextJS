import { connectdb } from "@/dbconfig/dbconfig";
import User from '@/models/userModel'
import { NextResponse ,NextRequest } from "next/server";
import bcrypt from "bcryptjs";

connectdb();

export async function POST(requset : NextRequest) {
    try {
        const reqBody = requset.json()
        const {username, email, password} = await reqBody;
        console.log(reqBody)

        const user = await User.findOne({email});
        if (user) {
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

    } catch (error : any) {
        return NextResponse.json({error: error.message}, {status : 500})
    }
}