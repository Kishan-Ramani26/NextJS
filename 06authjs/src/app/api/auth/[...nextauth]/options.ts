import NextAuth,{ NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bycrypt from "bcryptjs";
import dbconnect from "@/lib/dbConnect";
import User from "@/models/User";
import { email } from "zod/v4";

export const authOptions: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            id:"credentials",
            name:"Credentials",
            credentials:{
                email:{
                    
                }
            }
        })
    ]
}

