import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {des}
      </h3>
      <h1 className="text-5xl text-gray-300 font-bold capitalize">{title}</h1>
    </div>
  );
};

export default Title;
