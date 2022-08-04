// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createTransportEmail, sendEmail } from "../../lib/email-utils";

export default async function handler(req, res) {

  // email sending test . . .
  const transporter = createTransportEmail();

    transporter.verify(function (error, success) {
      if (error) {
        res.status(500).json({ message: "There was an error sending email" });
      } 
    });

    const sendEmailResult = await sendEmail(
      transporter,
      "agnieve70@gmail.com",
      "Test email"
    );
    res
    .status(201)
    .json({
      message: "Created User!",
      emailResult: sendEmailResult,
    });
}
