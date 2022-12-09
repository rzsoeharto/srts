import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer p-10 text-base-content poppins bg-black md:pb-24 md:gap-y-5">
        <div>
          <h1 className="text-huge condensed tracking-logo font-bold text-white md:pb-12">
            srts
          </h1>
          <p className="text-white text-sm pt-24 md:hidden">
            © 2022 seratus.co.id, Inc.
          </p>
        </div>

        {/* <div className="hidden flex-col text-white space-y-3 pt-11 md:flex">
          <span className="text-lg font-bold text-white">
            Coming soon on
          </span>
          <a className="link link-hover" href="/register">
            <img src="../../assets/icons/playStore.png" alt="Play Store" />
          </a>
          <a className="link link-hover" href="/register">
            <img src="../../assets/icons/appStore.png" alt="App Store" />
          </a>
        </div> */}

        <div className="text-white space-y-1 md:pb-1">
          <span className="text-lg font-bold text-white">Company</span>
          <a className="text-base link link-hover" href="/">
            About us
          </a>
        </div>

        <div className="text-white space-y-1 md:pb-1">
          <span className="text-lg font-bold text-white">Support</span>
          <a className="link link-hover text-base" href="/">
            Privacy policy
          </a>
          <a className="link link-hover text-base" href="/">
            Terms & agreement
          </a>
          <a className="link link-hover text-base" href="/">
            Contact us
          </a>
          <a className="link link-hover text-base" href="/">
            FAQ
          </a>
        </div>

        <div className="text-white space-y-1 md:pb-1">
          <span className="text-lg font-bold text-white">Socials</span>
          <div className="flex flex-row space-x-3">
            <a className="link link-hover" href="/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a className="link link-hover" href="/">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a className="link link-hover" href="/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>

        <div className="text-white place-content-end space-y-1 ">
          <span className="text-2xl font-bold text-white">Coming soon on</span>
          <a className="link link-hover w-[168px]" href="/register">
            <img src="../../assets/icons/playStore.png" alt="Play Store" />
          </a>
          <a className="link link-hover w-[168px]" href="/register">
            <img
              src="../../assets/icons/appStore.png"
              alt="App Store"
              className="w-42"
            />
          </a>
        </div>
        <p className="hidden text-white text-med md:block">
          © 2022 seratus.co.id, Inc.
        </p>
      </footer>
    </>
  );
}

export default Footer;
