// import React from 'react'
// import { getPackageDataFromLocalStorage } from '../../utils/localStore';
// import { FaBook, FaVolumeUp, FaHeadphones, FaPen } from 'react-icons/fa';

// const MyPackages = () => {

//   const savedPackages = getPackageDataFromLocalStorage();

//   // here from savedPacked(it is an array of object) show only price, quantity, and serviceName

//   console.log(savedPackages);


//   return (
//     <div className="flex flex-col justify-center ">
//       <h1 className="text-3xl font-semibold my-4">My Packages</h1>
//       <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-2">
//         {savedPackages.map((pkg, index) => (
//           <div key={index} className="hover:scale-105 transition-all duration-300 flex items-center border border-gray-300 rounded-lg p-4  shadow-md">
//             <div className="flex-1">
//               <h2 className="text-xl font-semibold text-[#0052CC]">{pkg.serviceName}</h2>
//               <p className="text-gray-700">Price: {pkg.price}</p>
//               <p className="text-gray-700">Quantity: {pkg.quantity}</p>
//             </div>
//             {/* Render icons based on serviceName */}
//             <div className="ml-2 border-2 border-[#0052CC] rounded-full p-4">
//               {pkg.serviceName.toLowerCase() === 'reading' && <FaBook className="text-[#0052CC] text-2xl" />}
//               {pkg.serviceName.toLowerCase() === 'speaking' && <FaVolumeUp className="text-[#0052CC] text-2xl" />}
//               {pkg.serviceName.toLowerCase() === 'listening' && <FaHeadphones className="text-[#0052CC] text-2xl" />}
//               {pkg.serviceName.toLowerCase() === 'writing' && <FaPen className="text-[#0052CC] text-2xl" />}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MyPackages


import React from 'react';
import { getPackageDataFromLocalStorage } from '../../utils/localStore';
import { FaBook, FaVolumeUp, FaHeadphones, FaPen } from 'react-icons/fa';

const MyPackages = () => {
  const savedPackages = getPackageDataFromLocalStorage();

  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 ">

      <div className='w-full flex justify-start'>
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">My Packages</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full ">
        {savedPackages.map((pkg, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
              {pkg.serviceName.toLowerCase() === 'reading' && <FaBook className="text-blue-500 text-2xl" />}
              {pkg.serviceName.toLowerCase() === 'speaking' && <FaVolumeUp className="text-blue-500 text-2xl" />}
              {pkg.serviceName.toLowerCase() === 'listening' && <FaHeadphones className="text-blue-500 text-2xl" />}
              {pkg.serviceName.toLowerCase() === 'writing' && <FaPen className="text-blue-500 text-2xl" />}
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{pkg.serviceName}</h2>
            <p className="text-gray-700 text-lg mb-1">
              <strong>Price:</strong> ${pkg.price}
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Quantity:</strong> {pkg.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPackages;
