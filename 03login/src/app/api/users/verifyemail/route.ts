import { connectdb } from '@/dbconfig/dbconfig';
import User from '@/models/userModel';
import { NextResponse, NextRequest } from 'next/server';

connectdb();

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();

        const { token } = reqBody;
        console.log(token);

        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() }
        })

        if (!user) {
            return NextResponse.json(
                { error: "Verfiy your email." },
                { status: 400 }
            )
        }
        console.log(user)

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        const save = await user.save();


        return NextResponse.json(
            { message: "verferiyed successfuly" }, { status: 200 }
        );


    } catch (error) {
        return NextResponse.json(
            { error: 'An error occurred while verifying the email.' },
            { status: 500 }
        );
    }
}