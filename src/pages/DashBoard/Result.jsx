// import React from 'react';
// import { FaMicrophone, FaBook, FaPencilAlt, FaChartBar } from 'react-icons/fa';
// import { GiSpeaker, GiOpenBook, GiPencilRuler, GiTalk } from 'react-icons/gi';
// import { GiCheckMark } from "react-icons/gi";
// import { MdSportsScore } from "react-icons/md";

// const Result = () => {
//   const results = [
//     { section: 'Listening', score: 35, band: 8.0 },
//     { section: 'Reading', score: 32, band: 7.5 },
//     { section: 'Writing', score: 30, band: 7.0 },
//     { section: 'Speaking', score: 33, band: 7.5 },
//   ];

//   return (
//     <div>
//          <h1 className="text-3xl  my-4">My Result</h1>
//         <div className=" flex flex-col items-center justify-center bg-gray-100 my-8">
//       <div className="bg-white p-10 rounded-lg shadow-md w-full">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {results.map((result, index) => {
//             const icon = index === 0 ? <GiSpeaker className={`text-yellow-700 text-3xl`} /> :
//                          index === 1 ? <GiOpenBook className={`text-orange-700 text-3xl`} /> :
//                          index === 2 ? <GiPencilRuler className={`text-blue-700 text-3xl`} /> :
//                          <GiTalk className={`text-green-700 text-3xl`} />;
//             return (
//               <div
//                 key={result.section}
//                 className={`p-6 rounded-2xl shadow-sm flex flex-col items-center hover:scale-105 transition-all duration-300 ${index === 0 ? 'bg-yellow-50 border border-yellow-700' : index === 1 ? 'bg-orange-50 border border-orange-700' : index === 2 ? 'bg-blue-50 border border-blue-700' : index === 3 ? 'bg-green-50 border border-green-700' : 'bg-purple-50 border border-purple-700'}`}
//               >
//                 <div className="flex items-center mb-2">
//                   {icon}
//                   <h2 className={`text-xl  ml-2 text-${index === 0 ? 'yellow' : index === 1 ? 'orange' : index === 2 ? 'blue' : index === 3 ? 'green' : 'purple'}-700`}>
//                     {result.section}
//                   </h2>
//                 </div>
             
//                 <div className="flex items-center gap-2">
//                 <GiCheckMark className={`text-2xl text-${index === 0 ? 'yellow' : index === 1 ? 'orange' : index === 2 ? 'blue' : 'green'}-700`} />
//                   <span className={` text-${index === 0 ? 'yellow' : index === 1 ? 'orange' : index === 2 ? 'blue' : 'green'}-700 text-xl`}>{result.score}</span>
//                 </div>
             
//                 <div className="flex items-center mt-2 gap-2">
//                 <MdSportsScore className={`text-3xl text-${index === 0 ? 'yellow' : index === 1 ? 'orange' : index === 2 ? 'blue' : 'green'}-700`} />
//                   <span className={` text-${index === 0 ? 'yellow' : index === 1 ? 'orange' : index === 2 ? 'blue' : 'green'}-700 text-xl`}>{result.band}</span>
//                 </div>

                
//               </div>
//             );
//           })}
//         </div>
//         <div className="mt-6 bg-blue-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
//           <div className="flex items-center mb-2">
//             <FaChartBar className="text-blue-400 mr-2" />
//             <h2 className="text-lg  text-blue-400">Overall</h2>
//           </div>
//           <div className="flex items-center">
           
//             <span className=" text-blue-400 text-xl">130</span>
//           </div>
//           <div className="flex items-center mt-2">
         
//             <span className=" text-blue-400 text-xl">7.5</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Result;



import React from "react";
import { FaChartBar } from "react-icons/fa";
import { GiSpeaker, GiOpenBook, GiPencilRuler, GiTalk, GiCheckMark } from "react-icons/gi";
import { MdSportsScore } from "react-icons/md";
import result from "../../../public/result.jpg"

const Result = () => {
  const results = [
    { section: "Listening", score: 35, band: 8.0 },
    { section: "Reading", score: 32, band: 7.5 },
    { section: "Writing", score: 30, band: 7.0 },
    { section: "Speaking", score: 33, band: 7.5 },
  ];

  const colors = ["yellow", "lime", "purple", "green"];

  return (
    <div className="pt-16   flex flex-col items-center rounded-lg">
      <h1 className="text-4xl  text-gray-800 mb-8">My IELTS Result</h1>
      <div className="w-full  bg-white p-4 md:p-10 rounded-lg shadow-lg">
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
                className={`p-2 md:p-6 rounded-2xl  shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-${colors[index]}-200 to-${colors[index]}-300 border border-${colors[index]}-300`}
              >
                <Icon className={`text-${colors[index]}-700 text-4xl mb-4`} />
                <h2 className={`text-2xl  text-${colors[index]}-700 mb-2`}>
                  {result.section}
                </h2>
                <div className="flex items-center gap-2 text-lg">
                  <GiCheckMark className={`text-${colors[index]}-700`} />
                  <span className={` text-${colors[index]}-700 text-xl`}>
                    Score: {result.score}
                  </span>
                </div>
                <div className="flex items-center mt-2 gap-2 text-lg">
                  <MdSportsScore className={`text-${colors[index]}-700`} />
                  <span className={` text-${colors[index]}-700 text-xl`}>
                    Band: {result.band}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-8 rounded-xl grid grid-cols-1 md:grid md:grid-cols-2 justify-between  bg-white border-blue-300  ">
         
            
         <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-5xl  text-[#0052CC]">130</span>
            <span className="text-3xl  text-[#0052CC] mt-2">Band: 7.5</span>
          </div>
          <div className="flex items-center mb-4">
            <FaChartBar className="text-[#0052CC] text-5xl mr-2" />
            <h2 className="text-3xl md:text-5xl  text-[#0052CC]">Overall Result</h2>
          </div>
         </div>

         <div className="flex justify-center items-center">
            <img src={result} className="w-80" alt="" />
         </div>


        </div>


      </div>
    </div>
  );
};

export default Result;
