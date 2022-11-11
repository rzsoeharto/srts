import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import OfferingSection from "../components/OfferingSection";
import TopBar from "../components/TopBar";
import LandingMobile from "./mobileView/LandingMobile";

function Landing() {
  return (
    <>
      <TopBar />
      <div className="flex-col pt-28 h-min">
        <div className="flex flex-row place-content-center py-14 w-full h-4/5 space-x-4">
          <div className="flex place-content-end w-1/5">
            <iframe
              width="380"
              height="760"
              src="https://www.youtube.com/embed/JUYMC9revJE?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex place-content-center w-1/4">
            <div className="flex flex-col place-content-center">
              <div className="flex place-content-center">
                <p className="condensed text-center text-6xl text-black font-bold w-full tracking-tightest">
                  Save money while saving the planet
                </p>
              </div>
              <div className="flex flex-wrap place-content-center">
                <p className="poppins text-2xl text-center gray-text w-3/5">
                  Slow fashion lets the earth live longer ❤️.
                </p>
              </div>
              <div className="flex place-content-center">
                <p className="btn btn-primary w-56 rounded-none h-11">
                  <Link
                    to="/register"
                    className="text-3xl white-text normal-case roboto"
                  >
                    Join Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-row place-content-center bg-primary patterns space-x-16 h-80 py-20 md:flex-col md:space-x-0 sm:space-y-0 ">
          <div className="flex flex-col w-1/5 place-content-center pb-9  md:w-full">
            <div className="border-b">
              <h1 className="white-text text-4.5xl condensed font-bold tracking-tighter w-full">
                Reduce
              </h1>
            </div>
            <p className="text-2xl text-justify poppins white-text">
              Reduce waste by buying used clothes. Producing new clothes creates
              a lot of waste.
            </p>
          </div>
          <div className="flex flex-col w-3/12 place-content-center md:w-full md:pb-10">
            <div className="border-b">
              <h1 className="white-text text-4.5xl condensed font-bold tracking-tighter w-full">
                Transparency
              </h1>
            </div>
            <p className="text-2xl h-36 text-justify poppins white-text w-full">
              Our listing system requires sellers to provide a view of all the
              sides of the product the want to sell, making sure every angle is
              covered
            </p>
          </div>
          <div className="flex flex-col w-1/5 place-content-center pb-8 md:w-full">
            <div className="border-b">
              <h1 className="white-text text-4.5xl condensed font-bold tracking-tighter w-full">
                Security
              </h1>
            </div>
            <p className="text-2xl h-36 text-justify poppins white-text">
              Our transaction system is designed to keep you and your purchases
              safe.
            </p>
          </div>
        </div>
      </div>
      <OfferingSection />
      <LandingMobile />
      <Footer />
    </>
  );
}

export default Landing;
