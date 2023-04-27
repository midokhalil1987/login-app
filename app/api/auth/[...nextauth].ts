import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FaceBookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    FaceBookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET,
    }),
  ],
});
