import React from "react";
import rightSideStudyImage from "../../../public/study.png";

const OwnPackage = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between px-2 md:px-6   bg-white h-[600px]">
      {/* Left Section */}
      <div className="flex flex-col items-start max-w-md gap-4">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1E266D] mb-4 leading-relaxed">
          Create your own package
        </p>

        <p className="text-[516986] text-md sm:text-lg mb-6 leading-relaxed">
          If you wish to purchase a combo package, you can choose your own
          selections from this page and purchase it.
        </p>

        <button className="bg-[#0052CC] text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Create Package
        </button>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0">
        <img
          src={rightSideStudyImage}
          alt="Study"
          className="w-full object-cover md:w-[600px] md:object-contain"
        />
      </div>
    </div>
  );
};

export default OwnPackage;
