import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Ideals from "../components/Ideals";
import OfferingSection from "../components/OfferingSection";
import Ribbon from "../components/Ribbon";
import TopBar from "../components/TopBar";

function Landing() {
  return (
    <>
      <TopBar />
      <div className="pt-16">
        <Ribbon />
        <div className="flex-col pt-12">
          <div className="flex flex-row place-content-center py-9 w-full space-x-4 md:space-x-0 md:flex-col">
            {/* Mobile */}
            <div className="mobile-view">
              <div className="place-content-center md:flex">
                <p className="text-3.5xl text-black condensed font-bold text-center w-3/5">
                  Save money while saving the planet
                </p>
              </div>
              <div className="place-content-center md:flex">
                <p className="text-base poppins text-center w-2/3 text-gray">
                  Slow fashion lets the earth live longer ❤️.
                </p>
              </div>
            </div>
            {/* Mobile 1 ends */}
            <div className="flex place-content-center w-max md:w-full">
              <iframe
                className="w-[360px] h-[720px] md:w-[360px]"
                src="https://www.youtube.com/embed/JUYMC9revJE??autoplay=1&rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Web */}
            <div className="flex place-content-center w-1/4 2xl:w-1/3">
              <div className="flex flex-col place-content-center web-view">
                <div className="flex place-content-center">
                  <p className="condensed text-center text-6xl text-black font-bold w-full tracking-tightest lg:text-5.5xl">
                    Save money while saving the planet
                  </p>
                </div>
                <div className="flex flex-wrap place-content-center">
                  <p className="poppins text-2xl text-center text-gray w-3/5 xl:text-xl lg:w-full">
                    Slow fashion lets the earth live longer ❤️.
                  </p>
                </div>
                <div className="flex place-content-center">
                  <p className="btn btn-primary w-56 rounded-none h-11">
                    <Link
                      to="/register"
                      className="text-3xl text-white normal-case roboto"
                    >
                      Join Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
          <div className="flex flex-row place-content-center bg-primary patterns pt-9 pb-20 space-x-12  xl:space-x-5 2xl:px-10 md:px-4 md:py-5 md:space-x-0 md:space-y-4 md:flex-col">
            <Ideals
              title={"Reduce"}
              subtext={
                "Reduce waste by buying used clothes. Producing new clothes creates a lot of waste. "
              }
            />
            <Ideals
              title={"Transparency"}
              subtext={
                "Our listing system requires sellers to provide a view of all the sides of the product the want to sell, making sure every angle is covered"
              }
            />
            <Ideals
              title={"Security"}
              subtext={
                "Our transaction system is designed to keep you and your purchases safe."
              }
            />
          </div>
        </div>
        <div className="mobile-view p-3 space-y-4">
          <Cards
            title={"We got your back"}
            subtext={
              "Our legit checking team will guarantee all the products* you receive are 100% authentic."
            }
            image={"../../../assets/prototypes/gotyourBack.png"}
          />
          <Cards
            title={"Visit our fits page"}
            subtext={
              "Visit our fits page and copy a look, or steal the whole fit with a push of a button. Sellers can post an outfit picture with a list of pruducts that’s shown."
            }
            image={"../../../assets/prototypes/visitPage.png"}
          />
          <Cards
            title={"Sell your unused clothes"}
            subtext={
              "Make your money back from selling your unused clothes and save the planet while you’re at it too ❤️."
            }
            image={"../../../assets/prototypes/sellClothes.png"}
          />
        </div>
        <OfferingSection />
      </div>
      <Footer />
    </>
  );
}

export default Landing;
