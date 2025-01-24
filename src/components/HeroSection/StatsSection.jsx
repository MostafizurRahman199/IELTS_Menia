import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute z-10 -bottom-16 sm:-bottom-24 lg:-bottom-20 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-10/12 lg:w-10/12 mx-auto grid grid-cols-3 gap-4 sm:gap-6 bg-white text-blue-600 p-8 sm:py-12 px-4 sm:px-6 rounded-2xl shadow-md"
    >
      {/* Packages Available */}
      <div className="text-center space-y-2">
        <h3 className="text-3xl sm:text-5xl font-semibold text-[#253642]">
          {startCount && (
            <CountUp start={0} end={60} duration={2} suffix="+" />
          )}
        </h3>
        <p className="text-sm sm:text-base text-[#516986]">
          Packages Available
        </p>
      </div>

      {/* Students Joined */}
      <div className="text-center space-y-2 sm:border-l sm:border-r border-gray-300">
        <h3 className="text-3xl sm:text-5xl font-semibold text-[#253642]">
          {startCount && (
            <CountUp start={0} end={50} duration={2} suffix="+" />
          )}
        </h3>
        <p className="text-sm sm:text-base text-[#516986]">Students Joined</p>
      </div>

      {/* Expert Facilitators */}
      <div className="text-center space-y-2">
        <h3 className="text-3xl sm:text-5xl font-semibold text-[#253642]">
          {startCount && (
            <CountUp start={0} end={50} duration={2} suffix="+" />
          )}
        </h3>
        <p className="text-sm sm:text-base text-[#516986]">
          Expert Facilitators
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
