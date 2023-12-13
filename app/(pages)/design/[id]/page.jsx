"use client";
import Image from "next/image";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const DesignPage = ({ params, query }) => {
  const src = useSearchParams().get("src");
  const { data: session } = useSession();
  const router = useRouter();

  async function handleClick() {
    if (!session) {
      await signIn("callback" || "google", { redirect: "/design/1" });
    }
  }

  return (
    <div className="px-20 pt-6 ">
      <div className="flex gap-5">
        <div className="relative w-[800px] h-[500px]">
          <Image src={src} fill />
        </div>
        <div>
          <h3>Materials Used</h3>
        </div>
      </div>
      <button
        className="rounded-lg mt-2 bg-red-50 px-4 py-1"
        onClick={handleClick}
      >
        like
      </button>
    </div>
  );
};

export default DesignPage;
