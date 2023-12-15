"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";

const HeroSection = ({ searchParams, handleClick }) => {
  const path = usePathname();
  const src = useSearchParams().get("src");
  const { data: session } = useSession();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    handleClick(session, liked);
  }, [liked]);

  return (
    <>
      <div className="flex gap-14">
        <div className="relative w-[800px] h-[500px]">
          <Image src={src} fill />
        </div>
        <div className="ml-4 flex flex-col items-end">
          <h3 className="text-xl">Materials Used</h3>
          <ul className="mt-4 list-disc">
            <li>Cork</li>
            <li>Bamboo</li>
            <li>Adobe Brick</li>
            <li>Straw Bale</li>
            <li>Cordwood</li>
            <li>Steel Rods</li>
            <li>Recycled glass</li>
          </ul>
        </div>

        <div className="flex flex-col items-center ml-10">
          <h1 className="text-xl">Rating</h1>
          <h2 className="mt-4">4.0/5.0</h2>
          <div className="flex mt-1">
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-2 w-[800px]">
        <button
          className="rounded-lg mt-2 bg-red-50 px-4 py-1 flex gap-2 items-center"
          onClick={async () => {
            searchParams.redirectURL = path;
            if (session) {
              setLiked((prev) => !prev);
            } else {
              await signIn("callback" || "google", {
                redirect: searchParams.redirectURL,
              });
            }
          }}
        >
          {liked ? <BiSolidLike /> : <BiLike />}
          like
        </button>
        <button className="rounded-lg mt-2 bg-red-50 px-4 py-1 flex gap-2 items-center">
          <FaShareAlt />
          Share
        </button>
      </div>
    </>
  );
};

export default HeroSection;
