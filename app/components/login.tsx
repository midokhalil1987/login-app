"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { UserCard } from "../userCard";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        <button className="px-4 py-2" type="button" onClick={() => signOut()}>
          Sign Out
        </button>
        <UserCard user={session?.user} />
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => signIn("facebook")}
          className="border-2 border-gray-200 rounded-full p-3 mx-1"
        >
          <FaFacebookF className="text-sm" />
        </button>
        <button
          onClick={() => signIn("github")}
          className="border-2 border-gray-200 rounded-full p-3 mx-1"
        >
          <FaGithub className="text-sm" />
        </button>
        <button
          onClick={() => signIn("google")}
          className="border-2 border-gray-200 rounded-full p-3 mx-1"
        >
          <FaGoogle className="text-sm" />
        </button>
      </>
    );
  }
}
