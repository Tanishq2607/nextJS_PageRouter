import { USER_API } from "../constants/api"
import { User } from "../types/user";
import Card from "../components/card";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch(USER_API);
  const data: User[] = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

const UserPosts = ({ users }: { users: User[] }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map((user) => (
          <Link key={user.id} href={`/userPost/${user.id}`}>
              <Card
                name={user.Name}
                Images={user.Images}
              />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
  