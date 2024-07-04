import Link from "next/link";
import styles from "./postCard.module.scss";

type PostProps = {
  id: string;
  title: string;
};

export default function PostCard({ id, title }: PostProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <Link href={`/blog/${id}`}>See more</Link>
    </div>
  );
}
