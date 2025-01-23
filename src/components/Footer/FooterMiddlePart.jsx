import React from 'react'

import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const FooterMiddlePart = () => {
  return (
    <div>
      <h3 className="font-bold text-xl md:text-2xl mb-4 text-white">Get in touch</h3>

      {/* First Location */}
      <div className="flex items-start mb-2">
        <div className="text-white mr-3">
          <FaMapMarkerAlt className="text-xl" />
        </div>
        <div>
          <p className="text-white">
            Registered Address: Ta-143/A, Moddho Badda (3rd Floor), Gulshan,
            Badda, Dhaka-1212
          </p>
        </div>
      </div>

      {/* Second Location */}
      <div className="flex items-start mb-2">
        <div className="text-white mr-3">
          <FaMapMarkerAlt className="text-xl" />
        </div>
        <div>
          <p className="text-white">
            House 15, Road 24, Gulshan-2, Dhaka-1212
          </p>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-start">
        <div className="text-white mr-3">
          <FaEnvelope className="text-xl" />
        </div>
        <div>
          <p className="text-white">solutionmaac@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddlePart;
