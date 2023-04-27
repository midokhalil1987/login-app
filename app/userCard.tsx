import { DefaultSession } from "next-auth";

export function UserCard({ user }: { user: DefaultSession["user"] }) {
  return (
    <>
      <div>
        <h2>Current logged in user:</h2>
        <h5>{user?.name}</h5>
        <h5>{user?.email}</h5>
      </div>
    </>
  );
}
