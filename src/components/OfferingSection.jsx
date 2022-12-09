import React from "react";
import { useState } from "react";

function OfferingSection({ lang }) {
  const { Carousel, slideTitle1, slideTitle2, slideTitle3 } = lang;
  const [activeTab, setActiveTab] = useState(1);
  const offering = Carousel.find(
    (p) => p.id.toString() === activeTab.toString()
  );

  const { title, subText, img } = offering;

  // Handle -1
  const handleMin = () => {
    if (activeTab === 1) {
      // as the if says, if the current active tab is = 1, instead of -1 set to max, which is 3
      setActiveTab(3);
    } else {
      // else, as usual
      setActiveTab(activeTab - 1);
    }
  };

  // Handle +1
  const handlePlus = () => {
    if (activeTab !== 3) {
      // this is the inverse of handleMin, if active tab is not 3 yet, +1
      setActiveTab(activeTab + 1);
    } else {
      // else set to 1
      setActiveTab(1);
    }
  };

  return (
    <>
      <div className="web-view flex flex-row place-content-center pt-11 px-6 md:hidden">
        <div className="flex flex-col place-content-center w-96 pb-44 xl:w-72 xl:pb-20">
          <h1 className="condensed font-bold text-black text-3xl w-full xl:text-3.5xl">
            {title}
          </h1>
          <p className="poppins font-normal text-gray text-xl text-justify xl:text-base">
            {subText}
          </p>
        </div>
        <img src={img} alt="" className="w-1/4" />
        <div className="flex flex-row space-x-10 pb-32 xl:pb-10 mdlg:space-x-5">
          <div className="flex flex-col place-content-center space-y-3 text-end text-2.5xl poppins text-gray xl:text-xl mdlg:text-base">
            <p
              className={
                activeTab === 1
                  ? " activeOptions cursor-pointer"
                  : "font-light cursor-pointer"
              }
              onClick={() => setActiveTab(1)}
            >
              {slideTitle1}
            </p>
            <p
              className={
                activeTab === 2
                  ? "activeOptions cursor-pointer"
                  : "font-light cursor-pointer"
              }
              onClick={() => setActiveTab(2)}
            >
              {slideTitle2}
            </p>
            <p
              className={
                activeTab === 3
                  ? " activeOptions cursor-pointer"
                  : "font-light cursor-pointer"
              }
              onClick={() => setActiveTab(3)}
            >
              {slideTitle3}
            </p>
          </div>
          <div className="flex flex-col place-content-center space-y-8">
            <img
              src="../../assets/icons/arrowUp.svg"
              onClick={handleMin}
              alt="-"
              className="cursor-pointer"
            />
            <img
              src="../../assets/icons/arrowDown.svg"
              onClick={handlePlus}
              alt="+"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferingSection;
