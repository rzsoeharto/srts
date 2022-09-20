import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div>
          <p className="header-lg">Website under construction.</p>
        </div>
        <div>
          <div className="flex place-content-center py-20">
            <Link to="/">
              <p className="logo-lg bg-black pl-2 pr-2">X00</p>
            </Link>
          </div>
          <div className="flex place-content-center">
            <form className="flex flex-col w-1/6">
              <label htmlFor="email">Email</label>
              <input type="text" className="input-md h-11" id="email" />
              <label htmlFor="name">Name</label>
              <input type="text" className="input-md h-11" id="name" />
            </form>
          </div>
        </div>
        <div>
          <div className="flex flex-row-reverse">
            <p className="header-lg object-right-bottom">
              Launching this year.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
