"use client";

type PaginationProps = {
  limit: number;
  page: number;
  count: number;
  pageHandler?: any;
  limitHandler?: any;
};

import styles from "./pagination.module.scss";

export default function PaginationBar({
  limit,
  page,
  limitHandler,
  pageHandler,
  count,
}: PaginationProps) {
  const counter = count / limit;

  const options = [];
  for (let i = 1; i <= counter; i++) {
    options.push(i);
  }

  return (
    <div className={styles.paginationBar}>
      <button disabled={page === 1 && true} onClick={() => pageHandler(1)}>
        First page
      </button>
      <button
        disabled={page === 1 && true}
        onClick={() => pageHandler((prev: any) => prev - 1)}
      >
        Previous
      </button>
      <span>
        {page} из {Math.ceil(counter)}
      </span>
      <button
        disabled={page === counter && true}
        onClick={() => pageHandler((prev: any) => prev + 1)}
      >
        Next
      </button>
      <button
        disabled={page === counter && true}
        onClick={() => pageHandler(counter)}
      >
        Last page
      </button>
      <label htmlFor="page">Page</label>
      <select value={page} onChange={(e) => pageHandler(+e.target.value)}>
        {options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <label htmlFor="limit">Limit</label>
      <select
        id="limit"
        defaultValue={limit}
        onChange={(e) => limitHandler(+e.target.value)}
      >
        <option value="10">10 </option>
        <option value="20">20 </option>
        <option value="50">50 </option>
        <option value="100">100 </option>
      </select>
    </div>
  );
}
