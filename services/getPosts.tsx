export const getPosts = async (page: number, limit: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
    { next: { revalidate: 60 } }
  );

  const count = response.headers.get("X-Total-Count");

  const data = {
    detail: await response.json(),
    count: Number(count),
  };

  return data;
};
