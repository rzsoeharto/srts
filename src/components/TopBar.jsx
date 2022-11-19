import React from "react";
import { Link } from "react-router-dom";

function TopBar({ handleLang }) {
  return (
    <>
      <div className="navbar bg-white fixed drop-shadow px-36 h-28 md:h-11 md:pl-4 md:pr-0 md:py-0 md:z-[999]">
        <div className="flex-1">
          <Link to="/">
            <img
              src="../../assets/logo/Logo.svg"
              className="w-80 lg:w-60 md:hidden"
              alt="logo"
            />
          </Link>
          <Link to="/">
            <img
              src="../../assets/logo/srts.svg"
              className="h-8 w-9 hidden md:block"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <label htmlFor="my-modal-3" className="btn btn-link no-animation">
            <img
              src="../../assets/icons/burgerIcon.svg"
              className="h-8 w-9 hidden md:block"
              alt="srts"
            />
          </label>
        </div>
        <div className="flex-none md:hidden">
          <ul className="menu menu-horizontal p-0 space-x-2 ">
            <label className="btn btn-outline rounded-none swap normal-case text-xl">
              <input type="checkbox" onClick={handleLang} />
              <div className="swap-off">English</div>
              <div className="swap-on">Indonesian</div>
            </label>
            <li className="btn btn-primary normal-case w-3/6 ">
              <Link to="/register" className="text-xl p-0 lg:text-base">
                Get the app
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal pt-14 z-[998]">
        <div className="modal-box h-full w-[100vw] relative px-2.5">
          <div className="h-4/5">
            <Link to="/">
              <h3 className="text-base poppins font-light px-2.5 py-1.5">
                Home
              </h3>
            </Link>
            <Link to="/register">
              <h3 className="text-base poppins font-light px-2.5 py-1.5">
                Register
              </h3>
            </Link>
            <Link to="/">
              <h3 className="text-base poppins font-light px-2.5 py-1.5">
                FAQ
              </h3>
            </Link>
          </div>
          <div className="w-full h-1/5 w-full flex place-content-center">
            <label
              htmlFor="my-modal-3"
              className="btn btn-md btn-ghost place-self-end text-2xl"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
