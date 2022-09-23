import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);

  const handleNavMobile = () => {
    setNavMobile(!navMobile);
  };

  return (
    <header className="w-full h-20 fixed top-0 left-0 bg-violetLight z-[1000] px-6">
      <div className="w-full h-full  max-w-[1100px] mx-auto flex items-center justify-between text-white">
        <h1 className="font-fontLogo text-3xl">MB</h1>
        <nav className="hidden md:flex">
          <ul className="flex gap-10 text-lg">
            <Link href="/">
              <li className="hover:text-orange-500 duration-100 cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/Project">
              <li className="hover:text-orange-500 duration-100 cursor-pointer">
                Projects
              </li>
            </Link>
            <Link href="/Skills">
              <li className="hover:text-orange-500 duration-100 cursor-pointer">
                Skills
              </li>
            </Link>
            <Link href="/Contact">
              <li className="hover:text-orange-500 duration-100 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </nav>
        <div
          className="flex md:hidden text-2xl cursor-pointer"
          onClick={handleNavMobile}
        >
          {!navMobile ? <FaBars /> : <AiOutlineClose />}
        </div>
        <div
          className={
            navMobile
              ? "bg-black/70 absolute top-[100%] left-0 w-full h-screen "
              : "bg-black/70 absolute top-[100%] left-[-100%] w-full h-screen "
          }
        />
        <nav
          className={
            navMobile
              ? "flex md:hidden absolute top-[100%] left-0 bg-violetLight w-full px-6 py-4 duration-200"
              : "flex md:hidden absolute top-[100%] left-[-100%] bg-violetLight w-full px-6 py-4 duration-200"
          }
        >
          <ul className="flex flex-col items-center gap-4 w-full text-center text-xl">
            <Link href="/">
              <li
                onClick={handleNavMobile}
                className="border-[3px] border-l-[10px] border-orangeLight w-[80%] py-2 cursor-pointer"
              >
                Home
              </li>
            </Link>
            <Link href="/Project">
              <li
                onClick={handleNavMobile}
                className="border-[3px] border-l-[10px] border-orangeLight w-[80%] py-2 cursor-pointer"
              >
                Projects
              </li>
            </Link>
            <Link href="/Skills">
              <li
                onClick={handleNavMobile}
                className="border-[3px] border-l-[10px] border-orangeLight w-[80%] py-2 cursor-pointer"
              >
                Skills
              </li>
            </Link>
            <Link href="/Contact">
              <li
                onClick={handleNavMobile}
                className="border-[3px] border-l-[10px] border-orangeLight w-[80%] py-2 cursor-pointer"
              >
                Contact
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
