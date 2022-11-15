import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Ribbon() {
  const [ribbon, setRibbon] = useState(true);
  const handleClick = () => {
    setRibbon(false);
  };
  return (
    <>
      <div
        className={
          !ribbon
            ? "hidden ribbon-hide"
            : "hidden ribbon flex-row bg-neutral h-20 p-4 w-full fixed bottom-0 z-[99] md:flex"
        }
      >
        <div className="flex flex-row w-1/2">
          <div className="w-12 h-12">
            <img src="../../assets/logo/appLogo.svg" alt="srts" />
          </div>
          <div className="flex flex-col place-content-center text-white pl-3">
            <p className="text-base roboto">Seratus</p>
            <p className="text-xs w-full poppins">Buy . Sell . Thrift</p>
          </div>
        </div>
        <div className="flex flex-row h-max w-1/2 space-x-4 place-content-end">
          <Link to="/register">
            <button className="btn btn-primary normal-case">Get the app</button>
          </Link>
          <div className="flex place-content-center">
            <img
              src="../../assets/icons/closeIcon.svg"
              alt=""
              className="h-"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ribbon;
