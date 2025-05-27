import { connectdb } from "@/dbconfig/dbconfig";
import { NextResponse , NextRequest} from "next/server";
import User from '@/models/userModel'


connectdb();

export async function POST(request: NextRequest) {
    try {
        
    } catch (error) {
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}