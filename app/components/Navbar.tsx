"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data } = useSession();

  return (
    <nav className="flex h-10 items-center justify-between p-8">
      <ul className="flex gap-12 text-xl text-justify text-neutral-700 font-normal">
        <li>
          <Image src="/GH.png" width={45} height={45} alt="Logo" />
        </li>
        <li className="hover:cursor-pointer hover:text-slate-400">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:cursor-pointer hover:text-slate-400">Category</li>
        <li>
          <SearchBar />
        </li>
      </ul>
      <ul className="flex gap-12 text-xl text-justify text-neutral-700 font-normal">
        <li className="hover:cursor-pointer hover:text-slate-400">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:cursor-pointer hover:text-slate-400">
          {data?.user?.name ? (
            <Link href="/api/auth/signout">Sign Out</Link>
          ) : (
            <Link href="/api/auth/signin">Sign In</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
