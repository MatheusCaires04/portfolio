import Image from "next/image";
import React from "react";
import SkillItem from "../components/SkillItem";
import BannerPage from "./../components/BannerPage";

import skill from "../../public/assets/skills.jpg";

const Skills = () => {
  return (
    <div className="mt-20">
      <BannerPage title="SKILLS" />
      <div className="px-6 w-full">
        <div className="flex flex-col max-w-[1100px] mx-auto items-center">
          <div className="w-56 h-56 border-[10px] border-orangeLight rounded-full image__skill" />
          <div className="flex flex-col gap-3 items-center">
            <p className="text-white text-xl md:text-2xl text-center w-[90%] md:w-[70%] mx-auto ">
              I have learned a lot of skills as a frontend developer and I am
              always learning something new to add a new skill to the list
            </p>
            <div className="flex flex-wrap gap-8 py-8 justify-center w-full md:w-[50%]">
              <SkillItem skill="HTML" />
              <SkillItem skill="CSS" />
              <SkillItem skill="JavaScript" />
              <SkillItem skill="ReactJS" />
              <SkillItem skill="MySQL" />
              <SkillItem skill="MongoDB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
