


// import React from "react";
// import { FaChartBar } from "react-icons/fa";
// import { GiSpeaker, GiOpenBook, GiPencilRuler, GiTalk, GiCheckMark } from "react-icons/gi";
// import { MdSportsScore } from "react-icons/md";
// import result from "../../../public/result.jpg"

// const Result = () => {
//   const results = [
//     { section: "Listening", score: 35, band: 8.0 },
//     { section: "Reading", score: 32, band: 7.5 },
//     { section: "Writing", score: 30, band: 7.0 },
//     { section: "Speaking", score: 33, band: 7.5 },
//   ];

//   const colors = ["yellow", "lime", "purple", "green"];

//   return (
//     <div className="pt-16   flex flex-col items-center rounded-lg">
//       <h1 className="text-4xl  text-gray-800 mb-8">My IELTS Result</h1>
//       <div className="w-full  bg-white p-4 md:p-10 rounded-lg shadow-lg">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {results.map((result, index) => {
//             const Icon =
//               index === 0
//                 ? GiSpeaker
//                 : index === 1
//                 ? GiOpenBook
//                 : index === 2
//                 ? GiPencilRuler
//                 : GiTalk;
//             return (
//               <div
//                 key={result.section}
//                 className={`p-2 md:p-6 rounded-2xl  shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-${colors[index]}-200 to-${colors[index]}-300 border border-${colors[index]}-300`}
//               >
//                 <Icon className={`text-${colors[index]}-700 text-4xl mb-4`} />
//                 <h2 className={`text-2xl  text-${colors[index]}-700 mb-2`}>
//                   {result.section}
//                 </h2>
//                 <div className="flex items-center gap-2 text-lg">
//                   <GiCheckMark className={`text-${colors[index]}-700`} />
//                   <span className={` text-${colors[index]}-700 text-xl`}>
//                     Score: {result.score}
//                   </span>
//                 </div>
//                 <div className="flex items-center mt-2 gap-2 text-lg">
//                   <MdSportsScore className={`text-${colors[index]}-700`} />
//                   <span className={` text-${colors[index]}-700 text-xl`}>
//                     Band: {result.band}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-8 p-8 rounded-xl grid grid-cols-1 md:grid md:grid-cols-2 justify-between  bg-white border-blue-300  ">
         
            
//          <div className="flex flex-col justify-center items-center gap-4">
//           <div className="flex flex-col items-center">
//             <span className="text-5xl  text-[#0052CC]">130</span>
//             <span className="text-3xl  text-[#0052CC] mt-2">Band: 7.5</span>
//           </div>
//           <div className="flex items-center mb-4">
//             <FaChartBar className="text-[#0052CC] text-5xl mr-2" />
//             <h2 className="text-3xl md:text-5xl  text-[#0052CC]">Overall Result</h2>
//           </div>
//          </div>

//          <div className="flex justify-center items-center">
//             <img src={result} className="w-80" alt="" />
//          </div>


//         </div>


//       </div>
//     </div>
//   );
// };

// export default Result;



import React from "react";
import { FaChartBar } from "react-icons/fa";
import { GiSpeaker, GiOpenBook, GiPencilRuler, GiTalk, GiCheckMark } from "react-icons/gi";
import { MdSportsScore } from "react-icons/md";
import result from "../../../public/result.jpg";

const Result = () => {
  const results = [
    { section: "Listening", score: 35, band: 8.0 },
    { section: "Reading", score: 32, band: 7.5 },
    { section: "Writing", score: 30, band: 7.0 },
    { section: "Speaking", score: 33, band: 7.5 },
  ];

  const colors = ["yellow", "lime", "purple", "green"];

  return (
    <div className="pt-16 flex flex-col items-center  min-h-screen px-2 sm:px-4">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">My IELTS Result</h1>
      <div className="w-full bg-white p-4 sm:p-6 md:p-12 rounded-3xl shadow-2xl ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {results.map((result, index) => {
            const Icon =
              index === 0
                ? GiSpeaker
                : index === 1
                ? GiOpenBook
                : index === 2
                ? GiPencilRuler
                : GiTalk;
            return (
              <div
                key={result.section}
                className={`p-4 md:p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-${colors[index]}-200 to-${colors[index]}-400 border border-${colors[index]}-300`}
              >
                <Icon className={`text-${colors[index]}-700 text-5xl mb-4`} />
                <h2 className={`text-xl font-semibold text-${colors[index]}-800 mb-2`}>
                  {result.section}
                </h2>
                <div className="flex items-center gap-2 text-lg">
                  <GiCheckMark className={`text-${colors[index]}-700`} />
                  <span className={`font-medium text-${colors[index]}-700`}>
                    Score: {result.score}
                  </span>
                </div>
                <div className="flex items-center mt-2 gap-2 text-lg">
                  <MdSportsScore className={`text-${colors[index]}-700`} />
                  <span className={`font-medium text-${colors[index]}-700`}>
                    Band: {result.band}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-extrabold text-blue-800">130</span>
              <span className="text-2xl font-medium text-blue-800 mt-2">Band: 7.5</span>
            </div>
            <div className="flex flex-col sm:flex sm:flex-row items-center mt-4">
              <FaChartBar className="text-blue-800 text-6xl mr-4" />
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-800">
                Overall Result
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={result}
              className="w-64 md:w-80 rounded-xl shadow-lg transition-transform transform hover:scale-105"
              alt="IELTS Result"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

