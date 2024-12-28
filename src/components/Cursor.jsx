import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  let trailX = 0,
    trailY = 0;
  let mouseX = 0,
    mouseY = 0;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateDotPosition = () => {
      if (dotRef.current) {
        dotRef.current.style.top = `${mouseY}px`;
        dotRef.current.style.left = `${mouseX}px`;
      }
    };

    const animateTrail = () => {
      if (trailRef.current) {
        trailX += (mouseX - trailX) * 0.2;
        trailY += (mouseY - trailY) * 0.2;
        trailRef.current.style.top = `${trailY}px`;
        trailRef.current.style.left = `${trailX}px`;
      }
      requestAnimationFrame(animateTrail);
    };

    document.addEventListener("mousemove", handleMouseMove);

    const intervalId = setInterval(updateDotPosition, 16); // Update dot every ~16ms (60fps)
    animateTrail();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="cursor-trail">
      <div ref={trailRef} className="trail" />
      <div ref={dotRef} className="dot" />
    </div>
  );
};

export default Cursor;
