import { DefaultSession } from "next-auth";
import Image from "next/image";

export function UserCard({ user }: { user: DefaultSession["user"] }) {
  return (
    <>
      <div>
        <h2>Current logged in user:</h2>
        <h5>{user?.name}</h5>
        <h5>{user?.email}</h5>
        <Image src={user?.image} alt={user?.name} fill />
      </div>
    </>
  );
}
