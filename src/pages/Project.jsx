import React from "react";
import ContainerProjects from "../components/ContainerProjects";
import BannerPage from "../components/BannerPage";

const Project = () => {
  return (
    <div className="mt-20">
      <BannerPage title="PROJECTS" />
      <ContainerProjects />
    </div>
  );
};

export default Project;
