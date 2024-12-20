import React from "react";
import PopUpWrapper from "./PopUpWrapper";

const LoaderCard = () => {
  return (
    <PopUpWrapper className="w-1/2 max-w-[800px] animate-pulse">
      <div className="w-full h-[500px] bg-almostBlack rounded-2xl border border-lightBlack"></div>

      <div className="w-[60%] h-[25px] mt-5 bg-lightBlack"></div>
    </PopUpWrapper>
  );
};

export default LoaderCard;
