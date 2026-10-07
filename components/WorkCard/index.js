import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link cursor-pointer"
      onClick={onClick}
    >
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 sm:h-64 laptop:h-72 w-full">
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />
      </div>
      <h1 className="mt-5 text-2xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-lg opacity-50 mt-2">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;