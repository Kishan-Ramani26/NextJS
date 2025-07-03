import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bycrypt from "bcryptjs";
import dbconnect from "@/lib/dbConnect";
import User from "@/model/User";

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

                    if (isPasswordCorrect) {
                        return users;
                    } else {
                        throw new Error("Incorrect password");
                    }
                    return users
                } catch (error) {
                    throw new Error("Failed to login" + error);
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id?.toString()
            }
            return token
        },
        async session({session,token}){
            return session
        },
    }
}

