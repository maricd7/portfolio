"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewMain = () => {
  return (
    <div className="h-full flex justify-center flex-col items-center  w-full gap-4 ">
      <h1 class="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text h-20 text-6xl font-bold text-transparent text-center">
        Crafting the symphony of User Interfaces.
      </h1>
      <h2 className="text-center text-xl  text-gray-400 w-3/5">
        I'm Dejan Maric, a dedicated developer from Banja Luka. I specialize in
        creating web based digital products.
      </h2>
      <div className="flex gap-4">
        <Link
          className="w-fit mt-16 bg-gradient-to-r hover:bg-gradient-to-l from-purple-500 via-purple-700 to-purple-900 px-12 py-2 text-lg rounded-full shadow-[0_5px_16px_rgba(75,_0,_130,_0.7)] hover:shadow-[0_9px_32px_rgba(75,_0,_130,_0.7)] "
          href=""
        >
          Projects
        </Link>
        <Link
          className="w-fit mt-16 bg-gray-950 text-white border-2 border-purple-950 px-12 py-2 text-lg rounded-full hover:shadow-lg hover:bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900  hover:text-white"
          href=""
        >
          About Me
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-32">
        <h2 className="text-center text-xl  text-gray-400 italic ">
          My tech stack
        </h2>
        <div className="flex gap-8 items-center ">
          <Image
            src="/tech-icons/nextjs.svg"
            alt="Next Js"
            height={96}
            width={128}
          />
          <Icon
            icon="uil:react"
            width="72"
            height="72"
            style={{ color: "#fff" }}
          />
          <Icon
            icon="file-icons:typescript"
            width="64"
            height="64"
            style={{ color: "#fff" }}
          />
          <Icon
            icon="devicon-plain:nodejs-wordmark"
            width="72"
            height="72"
            style={{ color: "#fff" }}
          />
          <Icon
            icon="devicon-plain:mongodb-wordmark"
            width="72"
            height="72"
            style={{ color: "#fff" }}
          />
          <Icon
            icon="devicon-plain:tailwindcss-wordmark"
            width="128"
            height="128"
            style={{ color: "#fff" }}
          />
        </div>
      </div>
      <div className="absolute bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 rounded-full w-96 h-96 bottom-16 right-16 blur-3xl opacity-30"></div>

      <div className="absolute bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 rounded-full w-96 h-96 top-16 left-16 blur-3xl opacity-10"></div>
    </div>
  );
};

export default NewMain;
