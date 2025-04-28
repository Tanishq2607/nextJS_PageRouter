import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { User } from "../../types/user";
import { Card } from "@/components";
import {fetchAllUsers, fetchUserById} from "../../apis/controller"
import { USER_DETAIL } from "../../constants/message";


export const getStaticPaths: GetStaticPaths = async () => {
  const users = await fetchAllUsers();
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
  if (!id) {
    return {
      props: { user: null },
    };
  }
  const user = await fetchUserById(id);
  return {
    props: {
      user,
    },
    revalidate: 1,
  };
};

export default function UserDetail({ user }: { user: User }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>{USER_DETAIL.loadingMessage}</div>;
  }
  if (!user) {
    return (
      <div className="p-4 text-center text-red-600 font-semibold">
        {USER_DETAIL.notFoundMessage}
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{USER_DETAIL.title}</h1>
      <Card name={user.Name} Images={user.Images} Description={user.Description} />
      <div className="mt-4">
      </div>
    </div>
  );
}
