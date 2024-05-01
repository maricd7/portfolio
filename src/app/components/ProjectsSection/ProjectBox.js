"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Paragraph, Subheading } from "../common";
import Link from "next/link";

export const ProjectBox = ({ name, text, technologies, image,github,live }) => {
  //temp link state until cms is done
  const [isSwiftSail, setIsSwiftSail] = useState(false);

  useEffect(() => {
    if (name === "Swift Sail Ecommerce App") {
      setIsSwiftSail(true);
    } else {
      setIsSwiftSail(false);
    }
  }, []);
  return (
    <div className="rounded-lg mt-8 flex md:flex-row flex-col items-center gap-4 border-2 border-zinc-800 p-4 ">
      
      <div>
        <Subheading text={name} />
        <Paragraph text={text} />
        <div className="flex gap-2 mt-2 flex-wrap">
          {technologies.map((tech, index) => (
            <span className="px-2 py-1 bg-slate-400 rounded-lg">{tech}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          {isSwiftSail ? (
            <Link
              className="bg-black text-white hover:bg-white hover:text-black py-2 px-4 rounded dark:bg-white dark:text-slate-950 dark:hover:bg-slate-950 dark:hover:text-white"
              href={live}
            >
              Live Demo
            </Link>
          ) : (
            <></>
          )}
          <Link
            className="bg-black text-white hover:bg-white hover:text-black py-2 px-6 rounded dark:bg-white dark:text-slate-950 dark:hover:bg-slate-950 dark:hover:text-white"
            href={github}
          >
            Code
          </Link>
        </div>
      </div>
      <Image
        className="rounded-lg h-fit"
        src={image}
        width={426}
        height={240}
        alt="SwiftSail Project Cover"
      />   
    </div>
  );
};
