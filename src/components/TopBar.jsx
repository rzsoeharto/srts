import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <>
      <div class="navbar bg-base-100 fixed drop-shadow px-36 h-28">
        <div class="flex-1">
          <Link to="/register">
            <img src="../../assets/logo/Logo.svg" className="w-80" alt="logo" />
          </Link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 space-x-2 ">
            <label className="btn btn-outline rounded-none swap normal-case text-xl">
              <input type="checkbox" />
              <div className="swap-off">English</div>
              <div className="swap-on">Indonesian</div>
            </label>
            <li className="btn btn-primary w-36 normal-case text-md">
              <Link to="/register" className="text-xl p-0">
                Get the app
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopBar;
