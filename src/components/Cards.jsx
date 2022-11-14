import React from "react";

function Cards({ title, subtext, image }) {
  return (
    <div className="z-0 flex-col px-3 bg-white drop-shadow-lg space-y-3 pt-2">
      <p className="text-4xl condensed font-bold text-black">{title}</p>
      <p className="text-xl poppins text-justify text-gray">{subtext}</p>
      <div className="flex place-content-center">
        <img src={image} alt="" className="overflow-clip h-30" />
      </div>
    </div>
  );
}

export default Cards;
