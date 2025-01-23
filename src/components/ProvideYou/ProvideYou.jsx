// import React from "react";
// import examPackageImage from "../../../public/provide1.png";
// import facilatorImage from "../../../public/provide2.png";
// import tricksImage from "../../../public/provide3.png";
// import scoreImage from "../../../public/provide4.png";

// const ProvideYou = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center py-24 px-4 bg-blue-600 text-white"
//       style={{
//         backgroundImage: `url('/provideBG.png')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Header */}
//       <h2 className="text-3xl font-semibold mb-8 text-center">
//         We will provide you
//       </h2>

//       {/* Icons Section */}
//       <div className="flex flex-wrap justify-center items-center gap-6 w-10/12">
//         {/* Full Exam Packages */}
//         <div className="flex flex-col items-center justify-center bg-white text-gray-800 p-6 rounded-xl shadow-lg w-64">
//           <img
//             src={examPackageImage}
//             alt="Full Exam Packages"
//             className="w-16 h-16 mb-4"
//           />
//           <p className="text-center text-lg font-semibold">Full exam packages</p>
//         </div>

//         {/* Plus Sign */}
//         <p className="text-4xl font-bold text-white hidden sm:block">+</p>

//         {/* Top Facilitator */}
//         <div className="flex flex-col items-center justify-center bg-white text-gray-800 p-6 rounded-xl shadow-lg w-64">
//           <img
//             src={facilatorImage}
//             alt="Top Facilitator"
//             className="w-16 h-16 mb-4"
//           />
//           <p className="text-center text-lg font-semibold">Top facilitator</p>
//         </div>

//         {/* Plus Sign */}
//         <p className="text-4xl font-bold text-white hidden sm:block">+</p>

//         {/* Best Tricks */}
//         <div className="flex flex-col items-center justify-center bg-white text-gray-800 p-6 rounded-xl shadow-lg w-64">
//           <img
//             src={tricksImage}
//             alt="Best Tricks"
//             className="w-16 h-16 mb-4"
//           />
//           <p className="text-center text-lg font-semibold">
//             Best tricks for the exam
//           </p>
//         </div>

//         {/* Equals Sign */}
//         <p className="text-4xl font-bold text-white hidden sm:block">=</p>

//         {/* Highest Scores */}
//         <div className="flex flex-col items-center justify-center bg-white text-gray-800 p-6 rounded-xl shadow-lg w-64">
//           <img
//             src={scoreImage}
//             alt="Highest Scores"
//             className="w-16 h-16 mb-4"
//           />
//           <p className="text-center text-lg font-semibold">Highest scores</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProvideYou;



import React from "react";
import examPackageImage from "../../../public/provide1.png";
import facilatorImage from "../../../public/provide2.png";
import tricksImage from "../../../public/provide3.png";
import scoreImage from "../../../public/provide4.png";
import { LuEqual } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";


const ProvideYou = () => {
  // Card data array
  const cards = [
    {
      id: 1,
      image: examPackageImage,
      title: "Full exam packages",
    },
    {
      id: 2,
      image: facilatorImage,
      title: "Top facilitator",
    },
    {
      id: 3,
      image: tricksImage,
      title: "Best tricks for the exam",
    },
    {
      id: 4,
      image: scoreImage,
      title: "Highest scores",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-24 px-2 sm:px-0  bg-blue-600 text-white"
      style={{
        backgroundImage: `url('/provideBG.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-semibold mb-16 text-center">
        We will provide you
      </h2>

      {/* Icons Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 w-11/12">
        {cards.map((card, index) => (
          <React.Fragment key={card.id}>
            {/* Card */}
            <div className="flex flex-col items-center justify-center bg-white text-gray-800 p-6 rounded-2xl shadow-lg w-64 h-64">
              <img
                src={card.image}
                alt={card.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="text-center text-lg font-semibold">{card.title}</p>
            </div>

            {/* Plus or Equals Sign */}
            {index < cards.length - 1 && (
              <p className="text-4xl font-bold text-white hidden sm:block">
                {index === cards.length - 2 ? 
                <LuEqual /> : <FiPlus />}
              </p>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProvideYou;
