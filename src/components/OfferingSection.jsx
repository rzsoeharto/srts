import React from "react";
import { useState } from "react";

function OfferingSection() {
  const [tab, setTab] = useState();
  return (
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
  );
}

export default OfferingSection;
