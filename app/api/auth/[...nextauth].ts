import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FaceBookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "177087653868-inhkqpgo0ju00hnh9u487ve85lci98r0.apps.googleusercontent.com",
      clientSecret: "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",
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
});
