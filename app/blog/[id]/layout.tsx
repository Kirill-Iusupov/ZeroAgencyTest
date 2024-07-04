import Link from "next/link";

export default function PostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container">
      <Link href="/">На главную</Link>
      {children}
    </div>
  );
}
