import { getDataFromToken } from "@/helpers/getDatafromtoken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectdb } from "@/dbconfig/dbconfig";

connectdb();

export async function GET(request: NextRequest) {

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId }).select("-password");
        return NextResponse.json(
            {
                mesaaage: "User found",
                data: user
            },
            { status: 200 }
        )
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

}