import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

const getPost = async ({ params: { id } }: Props) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { title } = await getPost({ params: { id } });
  return {
    title: `${title} | Zero Agency Test`,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPost({ params: { id } });

  return (
    <>
      <h3>{post.title}</h3>
      <p>Post {post.body}</p>
    </>
  );
}
