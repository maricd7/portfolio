"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export const BurgerMenu = ({
  toggleBurger,
  iconColor,
  toggleTheme,
  themeIcon,
}) => {
  return (
    <div className="md:hidden fixed z-50 h-full w-full top-0 right-0 bg-white bg-gray-950 flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-4 right-4  w-full flex justify-end p-4">
        {" "}
        <Icon
          onClick={toggleBurger}
          icon="carbon:close"
          width="24"
          height="24"
          style={{ color: iconColor }}
          className="cursor-pointer"
        />
      </div>
      <ul className="flex flex-col justify-center items-center gap-4">
        {/* <li className='flex items-center gap-4 w-full'  onClick={()=>toggleTheme()} ><Icon icon={themeIcon} className="md:block cursor-pointer h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90" style={{ color: iconColor }}/>Switch theme</li> */}
        <li className="w-full">
          <Link
            className="flex justify-start w-full items-center gap-4"
            href="https://www.linkedin.com/in/dejan-mari%C4%87-52a7a51b6/"
          >
            <Icon
              icon="carbon:logo-linkedin"
              width="32"
              height="32"
              style={{ color: iconColor }}
            />
            LinkedIn
          </Link>
        </li>
        <li className="w-full">
          <Link
            className="flex justify-start w-full items-center gap-4"
            href="https://www.github.com/maricd7"
          >
            <Icon
              icon="carbon:logo-github"
              width="32"
              height="32"
              style={{ color: iconColor }}
            />
            Github
          </Link>
        </li>
        <li className="w-full">
          <Link
            className="flex justify-start w-full items-center gap-4"
            href="https://medium.com/@dejanmaric259"
          >
            <Icon
              icon="carbon:logo-medium"
              width="32"
              height="32"
              style={{ color: iconColor }}
            />
            Medium
          </Link>
        </li>
      </ul>
    </div>
  );
};
