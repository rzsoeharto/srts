import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer p-10 pt-20 bg-neutral text-base-content">
        <div>
          <p className="text-huge condensed tracking-logo font-bold text-white">
            srts
          </p>
          <p className="white-text text-sm  pt-24">
            © 2022 seratus.co.id, Inc.
          </p>
        </div>
        <div className="white-text space-y-1">
          <span className="text-2xl font-bold poppins white-text">Company</span>
          <a className="link link-hover">About us</a>
        </div>

        <div className="white-text space-y-1">
          <span className="text-2xl font-bold poppins white-text">Support</span>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms & agreement</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">FAQ</a>
        </div>

        <div className="white-text space-y-1">
          <span className="text-2xl font-bold poppins white-text">Socials</span>
          <div className="flex flex-row space-x-3">
            <a className="link link-hover">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a className="link link-hover">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a className="link link-hover">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>

        <div className="white-text">
          <span className="text-2xl font-bold poppins white-text">
            Coming soon on
          </span>
          <a className="link link-hover">
            <img src="../assets/footer/playStore.png" alt="Play Store" />
          </a>
          <a className="link link-hover">
            <img src="../assets/footer/appStore.png" alt="App Store" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
