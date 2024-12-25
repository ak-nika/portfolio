import React from "react";

const Tag = ({ children, className }) => {
  return (
    <div
      className={`w-fit p-2 bg-almostBlack rounded-lg border border-lightBlack text-grey ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Tag;
