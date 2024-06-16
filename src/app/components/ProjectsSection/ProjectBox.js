"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Paragraph, Subheading } from "../common";
import Link from "next/link";

export const ProjectBox = ({
  name,
  text,
  technologies,
  image,
  github,
  live,
}) => {
  // Temp link state until cms is done
  const [isSwiftSail, setIsSwiftSail] = useState(false);

  useEffect(() => {
    if (name === "Swift Sail Ecommerce App") {
      setIsSwiftSail(true);
    } else {
      setIsSwiftSail(false);
    }
  }, []);

  return (
    <div className=" bg-black z-40 rounded-lg mt-8 flex flex-col   flex-row items-center gap-4 border-2 border-zinc-800">
      <div className="h-96 relative">
        <Image
          className="rounded-lg h-96"
          width={1000}
          src={image}
          height={1000}
          alt="SwiftSail Project Cover"
        />
      </div>
      <div className="p-4 w-full flex flex-col flex-grow">
        <Subheading text={name} />
        <Paragraph text={text} />
        <div className="flex gap-2 mt-2 flex-wrap">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-slate-400 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          {live && (
            <Link
              className="bg-black text-white hover:bg-white hover:text-black py-2 px-6 rounded dark:bg-white dark:text-slate-950 dark:hover:bg-slate-950 dark:hover:text-white"
              href={live}
            >
              Live Demo
            </Link>
          )}
          <Link
            className="bg-black text-white hover:bg-white hover:text-black py-2 px-6 rounded dark:bg-white dark:text-slate-950 dark:hover:bg-slate-950 dark:hover:text-white"
            href={github}
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};
