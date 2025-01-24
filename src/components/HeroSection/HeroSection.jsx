// import React from "react";

// // Right side image
// import HeroImageMaac from "../../../public/heroImageMaac.png";
// import { IoIosPlay } from "react-icons/io";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-[#0052CC] text-white px-4 py-12">
//       {/* Hero Section */}
//       <div className="w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
//         {/* Left Content */}
//         <div className="lg:w-1/2 text-center lg:text-left space-y-2 sm:space-y-6">
//           <h1 className="text-4xl sm:text-5xl font-semibold">Complete your</h1>
//           <div className="relative inline-block">
//             <h1 className="text-4xl sm:text-5xl font-semibold relative z-10">
//               IELTS preparation
//             </h1>
//             {/* Background highlight */}
//             <div className="absolute z-0 bottom-0 left-1 w-28 h-3 sm:h-4 bg-yellow-800"></div>
//           </div>
//           <h1 className="text-4xl sm:text-5xl font-semibold">at home</h1>

//           <p className="text-sm sm:text-base text-gray-100">
//             Get prepared to ace the competitive exams. It’s just <br /> so easy, you
//             choose your path to score your destined one.
//           </p>

//           <div className="flex  flex-col sm:flex  sm:flex-row items-center  space-y-4 sm:space-y-0 sm:space-x-4">
//             <div>
//             <button className="bg-white text-blue-600 font-bold px-6 py-4 rounded-2xl shadow-lg">
//               Start Free Pack
//             </button>
//             </div>

//             <div className="flex items-center space-x-2">
//               <button className="bg-white text-blue-600 p-2 rounded-full shadow-lg">

//               <IoIosPlay className="text-xl" />
//               </button>
//               <span className="text-white border-b text-sm sm:text-base">
//                 See how it works
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="lg:w-1/2  flex justify-center items-end">
//           <img
//             src={HeroImageMaac}
//             alt="Hero"
//             className="w-10/12 max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0"
//           />
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="absolute z-10  -bottom-34 mt-2 sm:mt-0   sm:-bottom-32 lg:-bottom-24 left-1/2 transform -translate-x-1/2 w-10/12 lg:w-10/12 mx-auto grid grid-cols-3  gap-4 sm:gap-6 bg-white text-blue-600 py-8 px-2 md:px-6 rounded-2xl shadow-md">
//         <div className="text-center space-y-2">
//           <h3 className="text-2xl sm:text-5xl font-semibold text-[#253642]">60+</h3>
//           <p className="text-sm sm:text-base text-[#516986]">Packages Available</p>
//         </div>
//         <div className="text-center space-y-2 sm:border-l sm:border-r border-gray-300">
//           <h3 className="text-2xl sm:text-5xl font-semibold text-[#253642]">50+</h3>
//           <p className="text-sm sm:text-base text-[#516986]">Students Joined</p>
//         </div>
//         <div className="text-center space-y-2">
//           <h3 className="text-2xl sm:text-5xl font-semibold text-[#253642]">50+</h3>
//           <p className="text-sm sm:text-base text-[#516986]">Expert Facilitators</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";

// Right side image
import HeroImageMaac from "../../../public/heroImageMaac.png";
import { IoIosPlay } from "react-icons/io";
import StatsSection from "./StatsSection";

const HeroSection = () => {
  return (
    <section className="relative bg-[#0052CC] text-white py-16  md:py-20">
      {/* Hero Section */}
      <div className="w-full px-4 sm:px-0 sm:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col  gap-4 text-center lg:text-left space-y-3">
          <div className="flex flex-col gap-4  items-start">
            <h1 className=" text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-semibold">
              Complete your
            </h1>

            <h1 className=" text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-semibold relative">
              <span className="relative z-10">
                IELTS
                <span className="absolute inline-block bottom-2 sm:bottom-2 left-0 w-full h-4 sm:h-6 bg-[#F1B44C] z-[-1]"></span>
              </span>
              <span> preparation</span>
            </h1>
            {/* Background highlight */}

            <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-semibold">
              at home
            </h1>

            <p className="text-sm sm:text-base text-start  text-gray-100 max-w-96">
              Get prepared to ace the competitive exams. It’s just so easy, you
              choose your path to score your destined one.
            </p>
          </div>

          <div className="flex flex-col item-start sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 font-semibold px-6 w-fit sm:px-6 py-4 rounded-2xl shadow-lg">
              Start Free Pack
            </button>

            <div className="flex items-center space-x-2">
              <button className="bg-white text-[#0052CC] p-3 rounded-full shadow-lg">
                <IoIosPlay className="text-xl" />
              </button>
              <span className="text-white border-b text-sm sm:text-base">
                See how it works
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-end items-end mt-10 sm:mt-16">
          <img
            src={HeroImageMaac}
            alt="Hero"
            className="w-11/12 max-w-sm sm:max-w-sm lg:max-w-md mx-auto lg:mx-0"
          />
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection></StatsSection>
    </section>
  );
};

export default HeroSection;
