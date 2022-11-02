import React from "react";
import { useState } from "react";

function OfferingSection() {
  const [tab, setTab] = useState();
  return (
    <div className="flex flex-row place-content-evenly md:flex-col md:place-content-center">
      <div className="flex flex-wrap w-1/5 place-content-evenly md:w-3/5">
        <h1 className="text-md bold">Recycle</h1>
        <p className="text-justify">
          Visit our fits page and copy a look, or steal the whole fit with a push of a button. 
          Sellers can post an outfit picture with a list of pruducts that’s worn.
        </p>
      </div>
      <div className="flex flex-wrap w-1/5 place-content-evenly md:w-3/5">
        <img src="../../assets/prototypes/visitPage.png" alt="X00" />
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
  );
}

export default OfferingSection;
