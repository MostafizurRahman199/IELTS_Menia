import React from "react";

// Right side image
import HeroImageMaac from "../../../public/heroImageMaac.png";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-10 px-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Complete your <span className="text-yellow-400">IELTS</span> preparation at home.
          </h1>
          <p className="text-sm sm:text-base text-gray-100">
            Get prepared to ace the competitive exams. It’s just so easy, you choose your path to score your destined one.
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md shadow-lg">
              Start Free Pack
            </button>
            <div className="flex items-center space-x-2">
              <button className="bg-white text-blue-600 p-2 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-6.588-4.24A1 1 0 007 7.592v8.816a1 1 0 001.164.996l6.588-1.04a1 1 0 00.748-.984v-4.408a1 1 0 00-.748-.984z"
                  />
                </svg>
              </button>
              <span className="text-white font-bold text-sm sm:text-base">See how it works</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img src={HeroImageMaac} alt="Hero" className="w-full max-w-sm mx-auto lg:max-w-full" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white text-blue-600 py-6 px-4 rounded-lg shadow-md">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold">60+</h3>
          <p className="text-sm sm:text-base">Packages Available</p>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-sm sm:text-base">Students Joined</p>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-sm sm:text-base">Expert Facilitators</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
