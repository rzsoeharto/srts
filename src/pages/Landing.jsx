import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Ideals from "../components/Ideals";
import OfferingSection from "../components/OfferingSection";
import Ribbon from "../components/Ribbon";
import TopBar from "../components/TopBar";

function Landing({ lang, handleLang }) {
  const [activeLang, setActiveLang] = useState(1);
  const {
    header,
    subHeader,
    joinButton,
    ideals1Title,
    ideals1Subtext,
    ideals2Title,
    ideals2Subtext,
    ideals3Title,
    ideals3Subtext,
    Card1Title,
    Card1Subtext,
    Card2Title,
    Card2Subtext,
    Card3Title,
    Card3Subtext,
  } = lang;

  return (
    <>
      <TopBar handleLang={handleLang} lang={lang} />
      <div className="pt-16">
        <Ribbon />
        <div className="flex-col z-[1]">
          <div className="flex flex-row place-content-center pt-20 pb-10 w-full space-x-4 md:pt-0 md:space-x-0 md:flex-col">
            {/* Mobile */}
            <div className="mobile-view">
              <div className="place-content-center md:flex">
                <p className="text-3.5xl text-black condensed font-bold text-center w-3/5">
                  {header}
                </p>
              </div>
              <div className="place-content-center md:flex">
                <p className="text-base poppins text-center w-2/3 text-gray">
                  {subHeader}
                </p>
              </div>
            </div>

            {/*Video Container*/}
            <div className="flex place-content-center w-max md:w-full">
              <iframe
                className="w-[360px] h-[720px] md:w-[360px]"
                src="https://www.youtube.com/embed/JUYMC9revJE??autoplay=1&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Web */}
            <div className="flex place-content-center w-1/4 2xl:w-1/3">
              <div className="flex flex-col place-content-center web-view">
                <div className="flex place-content-center">
                  <p className="condensed text-center text-6xl text-black font-bold w-full tracking-tightest lg:text-5.5xl">
                    {header}
                  </p>
                </div>
                <div className="flex flex-wrap place-content-center">
                  <p className="poppins text-2xl text-center text-gray w-3/5 pb-5 xl:text-xl lg:w-full">
                    {subHeader}
                  </p>
                </div>
                <div className="flex place-content-center">
                  <p className="btn btn-primary w-56 rounded-none h-11">
                    <Link
                      to="/register"
                      className="text-3xl text-white normal-case roboto"
                    >
                      {joinButton}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
          <div className="flex flex-row place-content-center bg-primary patterns pt-9 pb-20 space-x-12  xl:space-x-5 2xl:px-10 md:px-4 md:py-5 md:space-x-0 md:space-y-4 md:flex-col">
            <Ideals title={ideals1Title} subtext={ideals1Subtext} />
            <Ideals title={ideals2Title} subtext={ideals2Subtext} />
            <Ideals title={ideals3Title} subtext={ideals3Subtext} />
          </div>
        </div>
        <div className="mobile-view p-3 space-y-4">
          <Cards
            title={Card1Title}
            subtext={Card1Subtext}
            image={"../../../assets/prototypes/gotyourBack.png"}
          />
          <Cards
            title={Card2Title}
            subtext={Card2Subtext}
            image={"../../../assets/prototypes/visitPage.png"}
          />
          <Cards
            title={Card3Title}
            subtext={Card3Subtext}
            image={"../../../assets/prototypes/sellClothes.png"}
          />
        </div>
        <OfferingSection lang={lang} />
      </div>
      <Footer />
    </>
  );
}

export default Landing;
