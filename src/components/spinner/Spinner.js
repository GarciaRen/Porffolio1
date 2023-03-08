import React from "react";
import { Bars } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-bodyColor">
      <Bars
        height="80"
        width="80"
        color="#ff014f"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
