import React from "react";
import { useState } from "react";

function OfferingSection() {
  const [tab, setTab] = useState();
  return (
    <div>
      <div className="flex flex-row place-content-center">
        <div className="flex flex-col w-96 pt-36">
          <h1 className="landingHeader">Visit our fits page</h1>
          <p className="protoText text-justify">
            Visit our fits page and copy a look, or steal the whole fit with a
            push of a button. Sellers can post an outfit picture with a list of
            pruducts that’s worn.
          </p>
        </div>
        <img src="../../assets/prototypes/visitPage.png" alt="" />
        <div className="flex flex-col space-y-3 pt-64">
          <h1 className="offersOptions text-end cursor-pointer activeOptions">
            Don't know what to wear?
          </h1>
          <h1 className="offersOptions text-end cursor-pointer">
            Make your money back
          </h1>
          <h1 className="offersOptions text-end cursor-pointer">
            Afraid of scam?
          </h1>
        </div>
      </div>
      <div>offeringSection</div>
      <div>offeringSection</div>
    </div>
  );
}

export default OfferingSection;
