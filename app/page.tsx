"use client";

type Posts = {
  detail: any[];
  count: number;
};

import PostCard from "@/components/PostCard/PostCard";
import React, { useEffect, useState } from "react";

import styles from "./page.module.scss";
import PaginationBar from "@/components/pagintaionBar/PaginationBar";
import { getPosts } from "@/services/getPosts";

const Home = () => {
  const [posts, setPosts] = useState<Posts>();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts(page, limit)
      .then(setPosts)
      .finally(() => setIsLoading(false));
  }, [page, limit]);

  return (
    <div className="container">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className={styles.postsContainer}>
            {!posts ? (
              <h3>Нет постов</h3>
            ) : (
              posts.detail.map((post: any) => (
                <PostCard key={post.id} id={post.id} title={post.title} />
              ))
            )}
          </div>
          <PaginationBar
            limit={+limit}
            page={+page}
            count={+posts.count}
            limitHandler={setLimit}
            pageHandler={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
