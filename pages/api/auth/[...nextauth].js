import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_SERVER_USER,
    }),
  ],
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#1E90FF", // Hex color code
    logo: "", // Absolute URL to image
    buttonText: "" // Hex color code
  }
});
