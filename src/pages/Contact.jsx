import React from "react";
import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

import BannerPage from "./../components/BannerPage";

const Contact = () => {
  return (
    <div className="mt-20">
      <BannerPage title="Contact" />
      <div className="pt-4 md:pt-0 text-white max-w-[1100px] px-6 md:px-0 mx-auto">
        <h3 className="text-center text-xl md:text-3xl">
          Contact us via links or send an email
        </h3>
        <div className="flex flex-col-reverse md:flex-row gap-8 mt-6">
          <div className="flex flex-col items-center justify-evenly md:w-[50%] ">
            <div className="flex justify-between w-[50%] mx-auto p-0">
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
            <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start ">
              <span className="mb-2 flex items-center gap-3">
                <HiOutlineMail size={30} className='text-orangeLight' /> matheus-bini@hotmail.com
              </span>
              <span className="flex items-center gap-3">
                <HiOutlinePhone size={30} className='text-orangeLight' /> (18) 99645-3429
              </span>
            </div>
          </div>
          <form className="flex flex-col items-center w-full px-10 gap-4 md:w-[50%] ">
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full border-[3px] border-orangeLight rounded px-2 py-1 text-sm md:text-xl text-gray-700"
            />
            <input type="email" placeholder="Enter your email..." className="w-full border-[3px] border-orangeLight rounded px-2 py-1 text-sm md:text-xl text-gray-700" />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className='resize-none overflow-y-auto h-[120px] md:h-[150px] w-full border-[3px] border-orangeLight rounded px-2 py-1 text-sm md:text-xl text-gray-700'
            ></textarea>
            <input type="submit" value="Send" className='text-base md:text-xl border border-orangeLight rounded-full cursor-pointer text-orangeLight px-8 py-1 hover:bg-orangeLight hover:text-white duration-200' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
