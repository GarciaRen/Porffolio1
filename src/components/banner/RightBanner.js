import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-end items-end ">
      <img
        src={bannerImg}
        alt="bannerImg"
        className="h-[600px] w-[450px] z-10"
      />
      <div className="absolute w-[450px] h-[480px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne"></div>
    </div>
  );
};

export default RightBanner;
