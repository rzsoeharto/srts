import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="flex flex-col py-30 space-y-52 h-screen lg:space-y-48 md:space-y-36">
        <div className="flex place-content-center py-20">
          <Link to="/">
            <p className="logo-lg bg-black pl-2 pr-2">X00,</p>
          </Link>
        </div>
        <div className="flex flex-row place-content-center w-screen space-x-72 lg:space-x-56 md:space-x-32 ">
          <p className="text-lg">seratus</p>
          <p className="text-lg">.co</p>
          <p className="text-lg pr-16 md:pr-0">.id</p>
        </div>
        <div className="flex place-content-center pt-32">
          <div className="flex flex-col space-y-10 md:w-96">
            <p className="text-md">
              The biggest thrift shop in Indonesia. In the palm of your hand
            </p>
            <div className="flex flex-row place-content-center md:flex-col md:space-y-5">
              <p className="text-lg pr-3 align-middle">
                Buy, sell, or both. It's your world.
              </p>
              <button className="button-md px-7 lg:px-7 md:px-4 sm:px-2">
                <Link to="/register">Join Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="watermark">
        Created by <a href="">Rizky Soeharto</a>
      </p>
    </>
  );
}

export default Landing;
