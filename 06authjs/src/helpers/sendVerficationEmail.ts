import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verficationEmail";
import { ApiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail
    (
        email: string,
        username: string,
        verfycode: string
    ): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Verify your email:)",
            react: VerificationEmail({ username, otp: verfycode })
        })
        return {
            success: true,
            message: "Verification email sent successfully"
        }
    } catch (error) {
        console.log("Error sending verification email: " + error);
        return {
            success: false,
            message: "Error sending verification email"
        }
    }

}