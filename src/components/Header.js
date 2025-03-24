"use client";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white px-8 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        STAYKUY
      </Link>

      <div className="flex items-center gap-20">
        <nav className="hidden md:flex gap-6">
          <Link href="/my-booking" className="hover:underline">
            My Booking
          </Link>
          <Link href="/wishlist" className="hover:underline">
            Wishlist
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/help" className="hover:underline">
            Help
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Avatar size="large" icon={<UserOutlined />} />

          <div>ID</div>
        </div>
      </div>
    </header>
  );
}
