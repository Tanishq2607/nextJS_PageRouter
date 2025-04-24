import {fetchAllUsers} from "../apis/controller";
import {GetServerSideProps} from "next";
import Card from "../components/card";
import Link from "next/link";
import { User } from "@/types/user";


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const users = await fetchAllUsers();

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
};

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
                Description={user.Description}
              />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
  