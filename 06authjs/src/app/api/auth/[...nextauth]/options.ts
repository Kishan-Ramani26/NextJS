import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bycrypt from "bcryptjs";
import dbconnect from "@/lib/dbConnect";
import User from "@/model/User";
import { email, promise } from "zod/v4";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials: any): Promise<any> {
                await dbconnect();
                try {
                    const users = await User.findOne({
                        $or: [{ email: credentials.identifier }, { username: credentials.identifier }]
                    })
                    if (!users) {
                        throw new Error("User not found");
                    }
                    if (!users.isVerified) {
                        throw new Error("User not verified");
                    }
                    const isPasswordCorrect = await bycrypt.compare(credentials.password, users.password)
                    
                    if(isPasswordCorrect){
                        return users;
                    }else{
                        throw new Error("Incorrect password");
                    }

                } catch (error) {
                    throw new Error("Failed to login" + error);
                }
            }
        })
    ]
}

