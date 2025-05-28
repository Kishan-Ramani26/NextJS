import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userID } : any) => {
  try {

    const salt = await bcrypt.genSalt(10)

    if(emailType !== "verify") {
      await User.findByIdAndUpdate(userID, 
        { verifyToken: userID }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const mailOptions = {
      from: 'email@email.con',
      to: email, 
      subject: emailType === "verify" ? "Verify your email" : "Reset your password",
      html: "<b>Hello world ?</b>", // HTML body
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;

  } catch (error) {
    console.error("Error sending email:", error);
  }
};
