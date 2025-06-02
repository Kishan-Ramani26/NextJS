import { connectdb } from "@/dbconfig/dbconfig";
import { NextResponse, NextRequest } from "next/server";
import User from '@/models/userModel'


connectdb()

export async function GET(params: NextRequest) {
    try {
        const response = NextResponse.json(
            {message : "Logout successfuly",success : true},
            {status : 200},
            
        )

        response.cookies.set("token", "", {
            httpOnly : true,
            expires: new Date(0) 
        })  

    } catch (error) {
        return NextResponse.json(
            {error : "An error occurred while logging out"},
            {status : 500}
        )   
    }
}