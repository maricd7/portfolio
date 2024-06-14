"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "../Logo";
import { BurgerMenu } from "../BurgerMenu";

export const Nav = () => {
  const [burger, setBurger] = useState(false);

  function toggleBurger() {
    setBurger(!burger);
  }

  return (
    <nav className="flex justify-between  mx-56   items-center h-16 p-4 md:p-0 fixed top-0 left-0  md:relative">
      <Logo />
      <ul className="md:flex gap-4 hidden">
        <li>
          <Link href="https://www.linkedin.com/in/dejan-mari%C4%87-52a7a51b6/">
            <Icon
              icon="carbon:logo-linkedin"
              width="32"
              height="32"
              style={{ color: "#fff" }}
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.github.com/maricd7">
            <Icon
              icon="carbon:logo-github"
              width="32"
              height="32"
              style={{ color: "#fff" }}
            />
          </Link>
        </li>
        <li>
          <Link href="https://medium.com/@dejanmaric259">
            <Icon
              icon="carbon:logo-medium"
              width="32"
              height="32"
              style={{ color: "#fff" }}
            />
          </Link>
        </li>
      </ul>
      <Icon
        onClick={() => {
          toggleBurger();
        }}
        className="md:hidden"
        icon="carbon:menu"
        width="24"
        height="24"
        style={{ color: "#fff" }}
      />
      {burger ? (
        <BurgerMenu toggleBurger={toggleBurger} />
      ) : (
        console.log("desktop")
      )}
    </nav>
  );
};
