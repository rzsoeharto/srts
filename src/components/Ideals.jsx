import React from "react";

function Ideals({ title, subtext }) {
  return (
    <>
      <div className="flex-col w-3/12 2xl:w-2/5 xl:w-2/5 md:w-full">
        <div className="md:border-b border-white">
          <h1 className="text-white text-4.5xl condensed font-bold tracking-tighter w-full border-b xl:text-3.5xl md:w-full">
            {title}
          </h1>
        </div>
        <p className="text-2xl text-justify poppins text-white w-full h-full xl:text-xl lg:text-lg md:w-full">
          {subtext}
        </p>
      </div>
    </>
  );
}

export default Ideals;
