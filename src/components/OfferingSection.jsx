import React from "react";
import { offers } from "./offeringData";
import { useState } from "react";

function OfferingSection() {
  const [activeTab, setActiveTab] = useState(1);
  const offering = offers.find((p) => p.id.toString() === activeTab.toString());

  const handleMin = () => {
    if (activeTab === 1) {
      setActiveTab(3);
    } else {
      setActiveTab(activeTab - 1);
    }
  };

  const handlePlus = () => {
    if (activeTab !== 3) {
      setActiveTab(activeTab + 1);
    } else {
      setActiveTab(1);
    }
  };

  return (
    <>
      <div className="web-view flex flex-row place-content-center pt-11 px-6 md:hidden">
        <div className="flex flex-col place-content-center w-96 pb-44 xl:w-72 xl:pb-20">
          <h1 className="condensed font-bold text-black text-4.5xl w-max xl:text-3.5xl">
            {offering.title}
          </h1>
          <p className="poppins font-normal text-gray text-xl text-justify xl:text-base">
            {offering.subText}
          </p>
        </div>
        <img src={offering.img} alt="" className="w-1/4" />
        <div className="flex flex-row space-x-10 pb-32 xl:pb-10 mdlg:space-x-5">
          <div className="flex flex-col place-content-center space-y-3 text-end cursor-pointer text-2.5xl poppins text-gray xl:text-xl mdlg:text-base">
            <p
              className={activeTab === 1 ? " activeOptions" : "font-light"}
              onClick={() => setActiveTab(1)}
            >
              Don't know what to wear?
            </p>
            <p
              className={activeTab === 2 ? "activeOptions" : "font-light"}
              onClick={() => setActiveTab(2)}
            >
              Make your money back
            </p>
            <p
              className={activeTab === 3 ? " activeOptions" : "font-light"}
              onClick={() => setActiveTab(3)}
            >
              Afraid of scam?
            </p>
          </div>
          <div className="flex flex-col place-content-center space-y-8 cursor-pointer">
            <img
              src="../../assets/icons/arrowUp.svg"
              onClick={handleMin}
              alt="-"
            />
            <img
              src="../../assets/icons/arrowDown.svg"
              onClick={handlePlus}
              alt="+"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferingSection;
