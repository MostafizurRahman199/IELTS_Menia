


import React from 'react';
import { getPackageDataFromLocalStorage } from '../../utils/localStore';
import { FaBook, FaVolumeUp, FaHeadphones, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyPackages = () => {
  const savedPackages = getPackageDataFromLocalStorage();



  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 ">

      <div className='w-full flex justify-start'>
      <h1 className="text-2xl font-semibold text-[#495057] mb-6">My Packages</h1>
      </div>
    
      {
        savedPackages.length === 0 && <p className="text-gray-500">No packages available.</p>
      }

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full ">
        {savedPackages.map((pkg, index) => (
          <Link to={"/"}
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
              {pkg.serviceName.toLowerCase() === 'reading' && <FaBook className="text-blue-500 text-2xl" />}
              {pkg.serviceName.toLowerCase() === 'speaking' && <FaVolumeUp className="text-blue-500 text-2xl" />}
              {pkg.serviceName.toLowerCase() === 'listening' && <FaHeadphones className="text-blue-500 text-2xl" />}
              {pkg.serviceName.toLowerCase() === 'writing' && <FaPen className="text-blue-500 text-2xl" />}
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{pkg.serviceName.charAt(0).toUpperCase() + pkg.serviceName.slice(1)}</h2>
            <p className="text-gray-700 text-lg mb-1">
              <strong>Price:</strong> {pkg.price} TK
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Quantity:</strong> {pkg.quantity}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyPackages;
