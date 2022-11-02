import React from "react";
import { Link } from "react-router-dom";
import OfferingSection from "../components/OfferingSection";

function Landing() {
  return (
    <>
      {/* <div className="flex flex-col py-30  space-y-48 h-screen lg:space-y-48 md:space-y-36">
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
          <div className="flex flex-col space-y-5 md:w-96 md:text-sm">
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
        <div>
          <p>hello world</p>
        </div>
      </div> */}
      <div className="flex flex-col py-30  space-y-20 h-screen md:space-y-0 md:px-10">
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
        {/* Our app's foundation */}
        <div className="flex flex-row place-content-evenly md:flex-col md:place-content-center">
          <div className="flex flex-wrap w-1/5 place-content-evenly md:w-3/5">
            <h1 className="text-md bold">Recycle</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, distinctio veniam impedit facere aut rerum enim dicta
            </p>
          </div>
          <div className="flex flex-wrap w-1/5 place-content-evenly md:w-3/5">
            <h1 className="text-md bold">Transparency</h1>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quod
              accusantium omnis provident voluptatum vel
            </p>
          </div>
          <div className="flex flex-wrap w-1/5 place-content-evenly md:w-3/5">
            <h1 className="text-md bold">Security</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse at
              minus sit ipsum aspernatur molestias sint, perspiciatis voluptate
              fugiat facere!
            </p>
          </div>
        </div>

        <div className="flex place-content-center pt-80 pb-40 md:pt-10">
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
        <OfferingSection />
      </div>
    </>
  );
}

export default Landing;
