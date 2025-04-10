import React from "react";

const ProjectCard = ({ image, title, year, link }) => {
  return (
    <a href={link} target="_blank" className="w-full group">
      <div className="w-full h-[500px] border border-lighterBlack rounded-2xl relative overflow-hidden bg-red-200">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 m-auto object-cover w-full h-full md:grayscale md:group-hover:grayscale-0 transition-all duration-300"
        />
      </div>

      <div className="flex items-center gap-4 mt-4">
        <h3 className="text-[20px]">{title}</h3>
        <p className="text-grey text-[16px]">{year}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
