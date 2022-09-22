import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import photo from "../../public/assets/photo.JPG";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center px-6 pt-20">
      <div className="h-full md:w-[1100px] mx-auto flex flex-wrap-reverse md:flex-wrap">
        <div className="flex flex-col justify-center text-white md:w-[50%] items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 text-lg md:text-2xl">
            <h3>Hi, my name is</h3>
            <h1 className="text-xl md:text-3xl font-bold text-orangeLight ">
              Matheus Bini
            </h1>
          </div>
          <p className="text-sm md:text-lg leading-8 md:leading-8">
            I am currently working as a frontend developer, I am 27 years old
            and have a degree in Systems Analysis and Development from
            UniSALESIANO College - Salesian Catholic University Center Auxilium
          </p>
          <div className="flex justify-between w-[40%] mx-auto py-6">
            <Link href="/">
              <li className="text-3xl md:text-4xl hover:text-orangeLight duration-300 cursor-pointer">
                <FaFacebook />
              </li>
            </Link>
            <Link href="/">
              <li className="text-3xl md:text-4xl hover:text-orangeLight duration-300 cursor-pointer">
                <FaGithub />
              </li>
            </Link>
            <Link href="/">
              <li className="text-3xl md:text-4xl hover:text-orangeLight duration-300 cursor-pointer">
                <FaInstagram />
              </li>
            </Link>
            <Link href="/">
              <li className="text-3xl md:text-4xl hover:text-orangeLight duration-300 cursor-pointer">
                <FaLinkedin />
              </li>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-[50%]">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-[10px] border-orangeLight overflow-hidden bg-red-200">
            <Image src={photo} alt="" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
