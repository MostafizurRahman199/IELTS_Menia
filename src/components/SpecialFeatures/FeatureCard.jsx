import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureCard = ({ feature }) => {

  if (!feature) return null;

  return (
    <div className="bg-white shadow-md rounded-2xl p-8 text-start space-y-4 hover:shadow-lg transition-shadow duration-300">
      <img src={feature.image} alt={feature.title} className="w-12 h-12" />
      <h3 className="text-lg font-semibold text-[#0052CC]">
        {feature.title}
      </h3>
      <p className="text-sm text-[#516986] whitespace-pre-line">
        {feature.description}
      </p>
      <div className="flex justify-end items-center">
        <div className="flex items-center gap-2 text-[#253642] hover:text-[#0052CC]">
          <Link to="#" className="font-bold hover:underline inline-block">
            {feature.link}
          </Link>
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
