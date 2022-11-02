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
        <h1>Don't know what to wear?</h1>
      </div>
      <div>offeringSection</div>
      <div>offeringSection</div>
    </div>
  );
}

export default OfferingSection;
