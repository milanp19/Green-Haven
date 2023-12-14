import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainComponent = () => {
  return (
    <main className="px-24 pt-10" id="main">
      <h1 className="text-3xl">Designs you might love...</h1>
      <div className="grid grid-cols-5 mt-4 gap-4">
        <div className="text-center relative h-60 w-64 overflow-hidden hover:brightness-75">
          <Link
            href={{
              pathname: "/design/1",
              query: {
                src: "/houses/house1.jpg",
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
                redirectURL: "/",
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
  );
};

export default MainComponent;
