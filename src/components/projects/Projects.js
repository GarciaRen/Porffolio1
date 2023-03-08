import React from "react";
import Carousel from "../carousel/Carousel";
import Title from "../layouts/Title";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen font-titleFont pt-28 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-center">
          <Title
            des={"VISIT MY PORTFOLIO AND CHECK MY PROJECTS"}
            title={"My Projects"}
          />
        </div>
      </div>
      <div className=" bg-bodyColor py-6">
        <Carousel />
      </div>
    </section>
  );
};

export default Projects;
