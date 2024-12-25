import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black">
      <div className="relative">
        <div className="w-[200px] h-[200px] border-x-8 border-y-0 rounded-full animate-spin" />

        <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
