import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { DataProjects } from "./DataProjects";
import { BsArrowsFullscreen, BsGithub } from "react-icons/bs";

const ContainerProjects = () => {
  return (
    <div className="max-w-[1000px] mx-auto mt-0 md:mt-6 grid grid-col-1 md:grid-cols-2 px-6 md:px-0 gap:4 md:gap-8 justify-items-center">
      {DataProjects.map((index) => {
        return (
          <li key={index.id} className="w-full md:w-[95%] ">
            <div className="border-[10px] border-orangeLight w-full h-auto relative">
              <div className="h-[20rem]">
                <Image
                  src={index.image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black/90 text-white flex flex-col items-center justify-center px-8 py-4 duration-200 opacity-0 hover:opacity-[1]">
                <h3 className="text-xl font-semibold w-[100%]  md:w-[70%] text-center">
                  Go to the website or Code on GitHub
                </h3>
                <div className="flex gap-4 py-8 flex-col md:flex-row">
                  <Link href="/">
                    <a className="flex items-center gap-2 px-8 py-2 bg-orangeLight rounded-full hover:bg-white hover:text-orangeLight duration-200 font-semibold tracking-wider">
                      Website <BsArrowsFullscreen />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="flex items-center gap-2 px-8 py-2 bg-orangeLight rounded-full hover:bg-white hover:text-orangeLight duration-200 font-semibold tracking-wider">
                      GitHub <BsGithub />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default ContainerProjects;
