"use client";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
function Footer() {
  return (
    <footer className=" text-white py-8 w-full mt-10">
      <div className="container mx-auto text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Dejan Maric. All rights reserved.
        </p>
        <p className="mt-2 text-white flex items-center justify-center gap-8">
          Made with{" "}
          <Image
            src="/tech-icons/nextjs.svg"
            alt="Next Js"
            height={32}
            width={64}
          />
          <Icon
            icon="devicon-plain:tailwindcss-wordmark"
            width="128"
            height="128"
            style={{ color: "#fff" }}
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
