import { getDataFromToken } from "@/helpers/getDatafromtoken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectdb } from "@/dbconfig/dbconfig";


export async function GET(request: NextRequest) {
    await connectdb();
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId }).select("-password");
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        return NextResponse.json(
            {
                message: "User found",
                data: user
            },
            { status: 200 }
        )
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}