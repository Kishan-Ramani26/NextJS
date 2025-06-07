import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userID }: any) => {
  try {
    const hashedToken = await bcrypt.hash(userID.toString(), 10);

    if (emailType !== "VERIFY") {
      await User.findByIdAndUpdate(userID, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        }
      });
    }
    if (emailType !== "RESET") {
      await User.findByIdAndUpdate(userID, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        }
      });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b722707ca1d516",
        pass: "b9222f0409eb58"
      }
    });

    const mailOptions = {
      from: "email@email.con",
      to: email,
      subject:
        emailType === "verify" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a > to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. < br > ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      < /p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
