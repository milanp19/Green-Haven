"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import prisma from "./lib/prismaClient";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <header className="home_gradient w-full h-screen">
        <div className="flex justify-between h-64">
          <motion.h1
            className="px-4 mt-36 font-semibold mx-auto ml-20 hero_green relative opacity-0"
            animate={{
              opacity: 100,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
              easings: "easeout",
            }}
          >
            Green
            <motion.span
              className="text-black font-semibold absolute top-14"
              animate={{
                opacity: 100,
                left: "97%",
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                easings: "easeout",
              }}
            >
              Haven
            </motion.span>
          </motion.h1>
          <Image
            src="/Logo.png"
            alt="logo"
            width={400}
            height={200}
            className="mt-0 mr-16"
          />
        </div>

        <p className="mt-16 lg:text-start w-fit m-auto text-center text-base lg:text-2xl text-[#434343] px-4">
          Inspiring Sustainable Living: Where Eco Friendly Designs Meet Ethical
          Architecture. <br /> Your Journey to Greener, Smarter Home Begins
          Here.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-center mt-32 text-3xl cursor-pointer">
            Explore Our Designs
          </h2>
          <motion.span
            animate={{ y: 10 }}
            transition={{
              duration: 2,
              easings: "easein",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-2xl cursor-pointer"
          >
            <Link href="#main">
              <FaArrowDown />
            </Link>
          </motion.span>
        </div>

        <div className="absolute flex justify-between h-60 w-full bottom-0 -z-10">
          <Image
            src="/treebranch.png"
            alt="tree image"
            width={450}
            height={10}
            className="hidden min-[1000px]:block user select-none"
          />
          <Image
            src="/treebranch.png"
            alt="tree image"
            width={450}
            height={10}
            className="-scale-x-100 hidden min-[1000px]:block select-none"
          />
        </div>
      </header>
      <main className="px-24 pt-10" id="main">
        <h1 className="text-3xl">Designs you might love...</h1>
        <div className="grid grid-cols-4 mt-4 gap-4">
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/1",
                query: {
                  src: "/houses/house1.jpg",
                },
              }}
            >
              <Image
                src="/houses/house1.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/2",
                query: {
                  src: "/houses/house2.jpg",
                },
              }}
            >
              <Image
                src="/houses/house2.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/3",
                query: {
                  src: "/houses/house3.jpg",
                },
              }}
            >
              <Image
                src="/houses/house3.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/4",
                query: {
                  src: "/houses/house4.jpg",
                },
              }}
            >
              <Image
                src="/houses/house4.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/1",
                query: {
                  src: "/houses/house1.jpg",
                },
              }}
            >
              <Image
                src="/houses/house1.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/2",
                query: {
                  src: "/houses/house2.jpg",
                },
              }}
            >
              <Image
                src="/houses/house2.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/3",
                query: {
                  src: "/houses/house3.jpg",
                },
              }}
            >
              <Image
                src="/houses/house3.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/4",
                query: {
                  src: "/houses/house4.jpg",
                },
              }}
            >
              <Image
                src="/houses/house4.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/1",
                query: {
                  src: "/houses/house1.jpg",
                },
              }}
            >
              <Image
                src="/houses/house1.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/2",
                query: {
                  src: "/houses/house2.jpg",
                },
              }}
            >
              <Image
                src="/houses/house2.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/3",
                query: {
                  src: "/houses/house3.jpg",
                },
              }}
            >
              <Image
                src="/houses/house3.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/4",
                query: {
                  src: "/houses/house4.jpg",
                },
              }}
            >
              <Image
                src="/houses/house4.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/1",
                query: {
                  src: "/houses/house1.jpg",
                },
              }}
            >
              <Image
                src="/houses/house1.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/2",
                query: {
                  src: "/houses/house2.jpg",
                },
              }}
            >
              <Image
                src="/houses/house2.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/3",
                query: {
                  src: "/houses/house3.jpg",
                },
              }}
            >
              <Image
                src="/houses/house3.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/4",
                query: {
                  src: "/houses/house4.jpg",
                },
              }}
            >
              <Image
                src="/houses/house4.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/1",
                query: {
                  src: "/houses/house1.jpg",
                },
              }}
            >
              <Image
                src="/houses/house1.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/2",
                query: {
                  src: "/houses/house2.jpg",
                },
              }}
            >
              <Image
                src="/houses/house2.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/3",
                query: {
                  src: "/houses/house3.jpg",
                },
              }}
            >
              <Image
                src="/houses/house3.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/4",
                query: {
                  src: "/houses/house4.jpg",
                },
              }}
            >
              <Image
                src="/houses/house4.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/1",
                query: {
                  src: "/houses/house1.jpg",
                },
              }}
            >
              <Image
                src="/houses/house1.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/2",
                query: {
                  src: "/houses/house2.jpg",
                },
              }}
            >
              <Image
                src="/houses/house2.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/3",
                query: {
                  src: "/houses/house3.jpg",
                },
              }}
            >
              <Image
                src="/houses/house3.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
          <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
            <Link
              href={{
                pathname: "/design/4",
                query: {
                  src: "/houses/house4.jpg",
                },
              }}
            >
              <Image
                src="/houses/house4.jpg"
                fill
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
