


import React, { useEffect, useState } from "react";
import { FaRegClock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyCourses = ({ courses }) => {
  const [timers, setTimers] = useState({});

  // Initialize timers for each course based on validity
  useEffect(() => {
    const initializeTimers = () => {
      const initialTimers = {};
      courses.forEach((course) => {
        initialTimers[course._id] = course.validity * 24 * 60 * 60 * 1000; // Convert days to milliseconds
      });
      setTimers(initialTimers);
    };

    initializeTimers();
  }, [courses]);

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const updatedTimers = {};
        Object.keys(prevTimers).forEach((key) => {
          updatedTimers[key] = Math.max(0, prevTimers[key] - 1000); // Reduce 1 second (1000ms)
        });
        return updatedTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format timer (days, hours, minutes, seconds)
  const formatTimer = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days}D : ${hours}H : ${minutes}M : ${seconds}S`;
  };

  return (
    <div className="px-4 py-8">
      <div className="w-full flex justify-start">
        <h1 className="text-2xl sm:text-2xl font-semibold text-[#495057] mb-6">
          My Courses
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        {courses && courses.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <li key={course._id}>
                <div className="bg-white rounded-lg shadow-xl p-4  flex flex-col hover:scale-105 transition-all duration-300">
                
                  {/* Course Image */}
                  <div className="w-full bg-[#f4f8ff] rounded-lg relative flex items-center justify-center h-56 mb-4 mt-1">
                  <img
                    src={course.photo || "https://via.placeholder.com/150"}
                    alt={course.packageName}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                  
                    <button className="absolute top-1 right-4 bg-white p-2 rounded-md shadow-md hover:bg-gray-100">
                    {/* Bookmark Icon */}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-600"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 3v16l7-5 7 5V3a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                    />
                    </svg>
                </button>


                    <span className="absolute bottom-4 bg-white font-semibold text-md text-black px-4 py-1 rounded-md shadow border border-blue-300">
                      {formatTimer(timers[course._id] || 0)}
                    </span>
                  </div>

                <div className="flex flex-col items-start">
                      {/* Demo Ratings */}
                  <div className="flex items-center text-yellow-500 mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <FaStar key={idx} />
                      ))}
                    <span className="text-sm text-gray-500 ml-2">
                      5.00 (3)
                    </span>
                  </div>

                  {/* Course Title */}
                  <h2 className="text-lg font-semibold text-gray-800 text-start mb-2">
                    {course.packageName}
                  </h2>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <FaRegClock />
                    <p>Duration - {course.validity} Days</p>
                  </div>

                  {/* Button */}
                  <Link to={"/"} className="bg-[#0052CC] text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition mt-auto">
                    Start your exam
                  </Link>
                </div>

                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 text-lg">No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
