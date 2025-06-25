import { NextRequest, NextResponse } from "next/server";
import dbconnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerficationEmail";

export async function POST(req: NextRequest) {
    await dbconnect();
    try {
        const { username, email, password } = await req.json();

        const existingUserByEmail = await UserModel.findOne({ email })

        const verifieCode = Math.floor(100000 + Math.random() * 900000)

        if (existingUserByEmail) {
            if (existingUserByEmail.isVerified) {
                return NextResponse.json({
                    success: false,
                    message: "User already exists with this email"
                }, { status: 400 })
            }
            else {
                const hashedPassword = await bcrypt.hash(password, 10);
                existingUserByEmail.password = hashedPassword;
                existingUserByEmail.verifieCode = verifieCode.toString();
                existingUserByEmail.verifeCodeExpires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour from now

                await existingUserByEmail.save()
            }
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const expireDates = new Date()
            expireDates.setHours(expireDates.getHours() + 1)

            const newUser = await UserModel.create({
                username,
                email,
                password: hashedPassword,
                isVerified: false,
                isAcceptedMessages: true,
                messages: [],
                verifieCode,
                verifeCodeExpires: new Date(Date.now() + 60 * 60 * 1000) // 1 hour from now
            })

            await newUser.save()

            // Send verification email
            const verificationEmail = await sendVerificationEmail(email, username, newUser.verifieCode);

            if (!verificationEmail.success) {
                return NextResponse.json({
                    success: false,
                    message: "Error sending verification email"
                }, { status: 500 })
            }

            return NextResponse.json({
                success: true,
                message: "User created successfully",
                user: newUser
            }, { status: 201 })
        }


    } catch (error) {
        console.error("Error in signup route: ", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}

