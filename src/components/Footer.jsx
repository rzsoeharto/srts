import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer p-10 pt-20 bg-neutral text-base-content md:pb-20">
        <div>
          <p className="text-huge condensed tracking-logo font-bold text-white">
            srts
          </p>
          <p className="text-white text-sm pt-24 md:hidden">
            © 2022 seratus.co.id, Inc.
          </p>
        </div>

        <div className="hidden flex-col text-white space-y-3 pt-11 md:flex">
          <span className="text-2xl font-bold poppins text-white">
            Coming soon on
          </span>
          <a className="link link-hover" href="/register">
            <img src="../../assets/icons/playStore.png" alt="Play Store" />
          </a>
          <a className="link link-hover" href="/register">
            <img src="../../assets/icons/appStore.png" alt="App Store" />
          </a>
        </div>

        <div className="text-white space-y-1 poppins">
          <span className="text-2xl font-bold text-white">Company</span>
          <a className="link link-hover" href="/">
            About us
          </a>
        </div>

        <div className="text-white space-y-1 poppins">
          <span className="text-2xl font-bold text-white">Support</span>
          <a className="link link-hover" href="/">
            Privacy policy
          </a>
          <a className="link link-hover" href="/">
            Terms & agreement
          </a>
          <a className="link link-hover" href="/">
            Contact us
          </a>
          <a className="link link-hover" href="/">
            FAQ
          </a>
        </div>

        <div className="text-white space-y-1">
          <span className="text-2xl font-bold poppins text-white">Socials</span>
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
          <p className="hidden text-white text-sm pt-0 md:block">
            © 2022 seratus.co.id, Inc.
          </p>
        </div>

        <div className="text-white place-content-end md:hidden">
          <span className="text-2xl font-bold poppins text-white">
            Coming soon on
          </span>
          <a className="link link-hover" href="/register">
            <img src="../../assets/icons/playStore.png" alt="Play Store" />
          </a>
          <a className="link link-hover" href="/register">
            <img src="../../assets/icons/appStore.png" alt="App Store" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
