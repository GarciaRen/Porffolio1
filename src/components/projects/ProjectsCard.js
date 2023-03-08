import React from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full gap-4 px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={src}
          alt={src}
          className="h-60 group-hover:scale-110 duration-300 w-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="uppercase text-designColor font-bodyFont text-xl">
          {title}
        </h3>
        <div className="flex gap-3">
          <span className="text-lg w-10 h-10 inline-flex justify-center items-center rounded-full bg-black text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <BsGithub />
          </span>
          <span className="text-lg w-10 h-10 inline-flex justify-center items-center rounded-full bg-black text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <BsGlobe />
          </span>
        </div>
      </div>
      <p className="text-sm hover:text-gray-100 duration-300">{des}</p>
    </div>
  );
};

export default ProjectsCard;
