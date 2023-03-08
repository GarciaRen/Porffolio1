import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["test lang po.", "test lang ulit.", "pangatlong ulit."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 10,
    delaySpeed: 1500,
  });
  return (
    <div className="w-1/2 flex flex-col gap-28 pt-32">
      <div className="flex flex-col gap-3">
        <h4 className="text-normal text-lg"> WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Thomas Shelby</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorColor="#ff014f" />
        </h2>
        <p className=" text-base font-bodyFont leading-6">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div className="flex gap-4 justify-between">
        <div>
          <h2 className="uppercase text-base mb-4 font-titleFont">Find Me</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.facebook.com/profile.php?id=100085118475354">
                <BsFacebook />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/oyie-garcia-558090220/">
                <BsLinkedin />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/GarciaRen">
                <BsGithub />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="uppercase text-base mb-4 font-titleFont">
            Best Skill On
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
