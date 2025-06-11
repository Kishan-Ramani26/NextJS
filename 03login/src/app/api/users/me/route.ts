// import { connectdb } from "@/dbconfig/dbconfig";
// import User from "@/models/userModel";
// import { NextResponse, NextRequest } from "next/server";
// import { getDataFromToken } from "@/helpers/getDatafromtoken";

// connectdb();

// export async function GET(requset: NextRequest) {
//     try {
//         const userID = await getDataFromToken(requset);

//         const user = User.findOne({ _id: userID }).select("-password -username")
//         // const user = User.findOne({ _id: userID }).select("-password -username")
//         if (!user) {
//             return NextResponse.json(
//                 { error: "User not found." },
//                 { status: 404 }
//             );
//         }
//         return NextResponse.json({
//             data: user,
//             message: "User data retrieved successfully."
//         }, { status: 200 }
//         );


//     } catch (error) {
//         return NextResponse.json(
//             { error: "An error occurred while processing the request." },
//             { status: 500 }
//         );
//     }
// }



import { getDataFromToken } from "@/helpers/getDatafromtoken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectdb } from "@/dbconfig/dbconfig";

connectdb();

export async function GET(request: NextRequest) {

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId }).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

}