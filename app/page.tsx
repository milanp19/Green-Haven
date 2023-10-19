"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home_gradient w-full h-screen">
      <div className="flex justify-between h-fit">
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
          className="mt-0 mr-16 hidden md:block lg:block md:w-80 xl:w-96"
        />
      </div>

      <p className="mt-16 lg:text-start w-fit m-auto text-center text-base lg:text-2xl text-[#434343] px-4">
        Inspiring Sustainable Living: Where Eco Friendly Designs Meet Ethical
        Architecture. <br /> Your Journey to Greener, Smarter Home Begins Here.
      </p>

      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-center mt-32 text-3xl">Explore Our Designs</h2>
        <motion.span
          animate={{ y: 10 }}
          transition={{
            duration: 2,
            easings: "easein",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-2xl"
        >
          <Link href="/">
            <FaArrowDown />
          </Link>
        </motion.span>
      </div>

      <div className="absolute flex justify-between w-full bottom-0">
        <Image
          src="/treebranch.png"
          alt="tree image"
          width={450}
          height={10}
          className="hidden min-[1000px]:block"
        />
        <Image
          src="/treebranch.png"
          alt="tree image"
          width={450}
          height={10}
          className="-scale-x-100 hidden min-[1000px]:block"
        />
      </div>
    </main>
  );
}
