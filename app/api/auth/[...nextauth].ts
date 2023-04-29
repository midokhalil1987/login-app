import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FaceBookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import { NextApiRequest, NextApiResponse } from "next";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FaceBookProvider({
      clientId: "714388833791041",
      clientSecret: "24feaa226312e7b457dccce2bd6a77a1",
    }),
    GithubProvider({
      clientId: "c5aaff00bfea77b7a473",
      clientSecret: "e13b3dd0e5e35e903c860d75653419830aee1807",
    }),
  ],
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
