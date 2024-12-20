import React from "react";
import { useInView } from "react-intersection-observer";

const PopUpWrapper = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`pop-up ${inView ? "active" : ""} ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default PopUpWrapper;
