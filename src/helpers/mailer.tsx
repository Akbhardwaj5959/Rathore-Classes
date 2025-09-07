import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hased token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordExpiry: Date.now() + 3600000,
      });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "1365a3792c4ef8",
        pass: "8f214ecfe51938",
      },
    });

    // Send the email
    const mailOptions = {
      from: "bhardwaj.ak41@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",

      html: `<p>Click <a href="${
                  process.env.DOMAIN
                }/verifyemail?token=${hashedToken}">here</a> to ${
                  emailType === "VERIFY" ? "verify your email" : "reset your password"
                } or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
              </p>`,
    };

    const mailResponce = await transport.sendMail(mailOptions);
    return mailResponce;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
