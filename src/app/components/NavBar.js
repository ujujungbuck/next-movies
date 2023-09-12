"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/" style={{ color: pathname === "/" ? "active" : "" }}>
          Home
        </Link>
        <Link
          href="/about"
          style={{ color: pathname === "/about" ? "active" : "" }}
        >
          About
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        .active {
          color: gray;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
