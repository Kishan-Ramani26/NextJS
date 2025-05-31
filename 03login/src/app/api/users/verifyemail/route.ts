import { connectdb } from '@/dbconfig/dbconfig';
import User from '@/models/userModel';
import { NextResponse, NextRequest } from 'next/server';

connectdb();

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();

        const {token} = reqBody;
        console.log(token);

        if(token){
            
        }


    } catch (error) {
        return NextResponse.json(
            { error: 'An error occurred while verifying the email.' },
            { status: 500 }
        );
    }
}