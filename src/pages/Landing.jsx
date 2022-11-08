import React from "react";
import { Link } from "react-router-dom";
import OfferingSection from "../components/OfferingSection";
import LandingMobile from "./mobileView/LandingMobile";

function Landing() {
  return (
    <>
      <div className="sm:hidden">
        <div className="flex flex-col py-30 h-screen md:px-10">
          <div className="flex flex-col place-content-center py-10">
            <div className="flex place-content-center">
              <Link to="/" className="w-auto lg:w-96 md:w-72">
                <img src="../../assets/logo/Logo.svg" alt="X00" />
              </Link>
            </div>
            <div className="flex flex-row place-content-center space-x-60 lg:space-x-28 md:pl-0 md:space-x-20">
              <p className="text-lg">seratus</p>
              <p className="text-lg">.co</p>
              <p className="text-lg">.id</p>
            </div>
          </div>
          {/* ------------------------------------------------------------- */}
          <div className="flex flex-row place-content-center space-x-16 pt-20 md:flex-col md:place-content-center md:space-y-12 md:space-x-0 sm:space-y-0">
            <div className="flex flex-wrap w-1/5 place-content-center md:w-full">
              <h1 className="title text-xl pb-6">Reduce</h1>
              <p className="text-center text-md poppins light gray-text">
                Reduce waste by buying used clothes. Producing new clothes
                creates a lot of waste.
              </p>
            </div>
            <div className="flex flex-wrap w-3/12 place-content-center md:w-full md:pb-10">
              <h1 className="title text-xl pb-5">Transparency</h1>
              <p className="text-center text-md poppins light gray-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                quod accusantium omnis provident voluptatum vel
              </p>
            </div>
            <div className="flex flex-wrap w-1/5 place-content-center md:w-full">
              <h1 className="title text-xl pb-4">Security</h1>
              <p className="text-center text-md poppins light gray-text">
                Our systematic transaction system is designed to keep you and
                your purchases safe.
              </p>
            </div>
          </div>
          <div className="flex place-content-center pt-72 pb-40 md:pt-10">
            <div className="flex flex-col space-y-5 md:w-80">
              <p className="text-md md:text-2xl">
                The biggest thrift shop in Indonesia. In the palm of your hand
              </p>
              <div className="flex flex-row place-content-center md:flex-col md:space-y-5">
                <p className="text-lg pr-3 align-middle md:text-2xl">
                  Buy, sell, or both. It's your world.
                </p>
                <button className="button-md px-7 lg:px-7 md:px-4 sm:px-2">
                  <Link to="/register">Join Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <OfferingSection />
      </div>
      <LandingMobile className="sm:flex hidden" />
    </>
  );
}

export default Landing;
