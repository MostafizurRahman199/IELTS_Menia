
import React from "react";
import review from "../../../public/review.png";
import checkPerformance from "../../../public/checkPerformance.png";
import instantResult from "../../../public/instantResult.png";
import fullExamPackage from "../../../public/fullExamPackage.png";
import FeatureCard from "./FeatureCard";

const SpecialFeatures = () => {
  const features = [
    {
      title: "Full exam Packages",
      description: "IELTS general & academic\nSpeaking, reading, writing full mock module",
      image: fullExamPackage,
      link: "More",
    },
    {
      title: "Instant Result",
      description: "IELTS general & academic\nSpeaking, reading, writing full mock module",
      image: instantResult,
      link: "More",
    },
    {
      title: "Check Performance",
      description: "IELTS general & academic\nSpeaking, reading, writing full mock module",
      image: checkPerformance,
      link: "More",
    },
    {
      title: "Facilitator Review",
      description: "IELTS general & academic\nSpeaking, reading, writing full mock module",
      image: review,
      link: "More",
    },
  ];

  return (
    <section className="pb-12 pt-44 bg-[#f3f6fc]">
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Header */}
        <div className="md:col-span-2 bg-[#0052CC] text-white rounded-2xl p-12">
          <h2 className="text-2xl  my-2 sm:text-4xl font-semibold">
            Our special features   
          </h2>
          <h2 className="text-2xl my-2 sm:text-4xl font-semibold">
            for students
          </h2>
          <button className="mt-4 bg-white text-[#0052CC] px-6 py-3 rounded-xl font-semibold shadow-md">
            See Features
          </button>
        </div>

        {/* Features Grid */}
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default SpecialFeatures;

