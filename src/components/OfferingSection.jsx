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
      <div className="pt-32 sm:pt-10">
        <div className="flex flex-row place-content-center pt-6 pb-20 md:hidden">
          <div className="flex flex-col w-96 pt-36">
            <h1 className="landingHeader">{offering.title}</h1>
            <p className="protoText text-justify">{offering.subText}</p>
          </div>
          <img src={offering.img} alt="" />
          <div className="flex flex-row pt-64 space-x-10">
            <div className="flex flex-col space-y-3">
              <p
                className={
                  activeTab === 1
                    ? "offersOptions text-end cursor-pointer activeOptions"
                    : "offersOptions text-end cursor-pointer"
                }
                onClick={() => setActiveTab(1)}
              >
                Don't know what to wear?
              </p>
              <p
                className={
                  activeTab === 2
                    ? "offersOptions text-end cursor-pointer activeOptions"
                    : "offersOptions text-end cursor-pointer"
                }
                onClick={() => setActiveTab(2)}
              >
                Make your money back
              </p>
              <p
                className={
                  activeTab === 3
                    ? "offersOptions text-end cursor-pointer activeOptions"
                    : "offersOptions text-end cursor-pointer"
                }
                onClick={() => setActiveTab(3)}
              >
                Afraid of scam?
              </p>
            </div>
            <div className="flex flex-col pt-8 space-y-8">
              <img
                src="../../assets/icons/arrowUp.svg"
                className="cursor-pointer"
                onClick={handleMin}
                alt="-"
              />
              <img
                src="../../assets/icons/arrowDown.svg"
                className="cursor-pointer"
                onClick={handlePlus}
                alt="+"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:place-content-center">
          <div className="flex-col space-y-10">
            <div className="three-cards px-5 py-8 m-4">
              <h1 className="landingHeader mbl">Visit our fits page</h1>
              <p className="protoMbl text-justify">
                Visit our fits page and copy a look, or steal the whole fit with
                a push of a button. Sellers can post an outfit picture with a
                list of pruducts that's shown.
              </p>
            </div>
            <div className="three-cards px-5 py-8 m-4">box 2</div>
            <div className="three-cards px-5 py-8 m-4">box 3</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferingSection;
