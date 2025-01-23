import React from "react";
import rightSideLogo from "../../../public/FooterXampp.png";
import leftSideLogo from "../../../public/maacLogo.png";
import footerBankCard from "../../../public/footerBankCard.png";
import FooterMiddlePart from "./FooterMiddlePart";
import SecondaryFooter from "./SecondaryFooter";

const Footer = () => {
  return (
    <footer className="bg-[#1b2331] text-white pt-12 ">
      <div className="w-10/12 mx-auto px-6  grid grid-cols-1 justify-items-center md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div className="flex flex-col">
          <img src={rightSideLogo} alt="Xampro Logo" className="w-32 mb-4" />
          <p className="text-white mb-2">
            Need a solution for mockup exams? Or perhaps exam supervision?
          </p>
          <p className="text-white font-semibold">Xampro is the answer.</p>
        </div>

        {/* Middle Section */}
        <FooterMiddlePart></FooterMiddlePart>

        {/* Right Section */}
        <div className="">
          <h3 className="font-bold text-xl md:text-2xl mb-4">Want Some Insights?</h3>
          <div className="flex items-center gap-4">
            <img src={leftSideLogo} alt="MAAC Logo" className="w-32" />
          </div>
        </div>
      </div>

      {/* Payment and Bottom Links */}
      <div className="w-10/12 mx-auto mt-12  py-8">
        {/* Payment Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={footerBankCard}
            alt="Payment Options"
            className="w-full  object-contain"
          />
        </div>

        {/* Links Section */}
      </div>
        <SecondaryFooter></SecondaryFooter>
    </footer>
  );
};

export default Footer;
