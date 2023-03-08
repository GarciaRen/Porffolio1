import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center font-titleFont"
    >
      <div className="flex items-center">
        <LeftBanner />
        <RightBanner />
      </div>
    </section>
  );
};

export default Banner;
