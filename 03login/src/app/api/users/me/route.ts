import { connectdb } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connectdb();

export async function POST(requset: NextRequest) {
    try {
        
    } catch (error) {
        return NextResponse.json(
            { error: "An error occurred while processing the request." },
            { status: 500 }
        );
    }
}
