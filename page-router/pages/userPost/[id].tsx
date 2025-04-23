import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { USER_API } from "../../constants/api"
import { User } from "../../types/user";
import Card from "@/components/card";


export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(USER_API);
  const users: User[] = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const res = await fetch(`${USER_API}/${id}`);

  if (!res.ok) {
    return {
      props: {
        user: null
      }

    };
  }

  const user: User = await res.json();

  return {
    props: {
      user,
    },
  };
};

export default function UserDetail({ user }: { user: User }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="p-4 text-center text-red-600 font-semibold">
        User not found
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User Detail</h1>
      <Card name={user.Name} Images={user.Images} />
      <div className="mt-4">
        <p><strong>ID:</strong> {user.id}</p>
      </div>
    </div>
  );
}
