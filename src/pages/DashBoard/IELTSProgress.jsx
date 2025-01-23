import React from "react";

const IELTSProgress = () => {
  // Demo data for IELTS preparation progress
  const progressData = [
    { section: "Listening", progress: 75 },
    { section: "Reading", progress: 65 },
    { section: "Writing", progress: 50 },
    { section: "Speaking", progress: 85 },
  ];

  // Additional data
  const additionalData = {
    targetBand: 7.5,
    averageProgress:
      progressData.reduce((total, item) => total + item.progress, 0) /
      progressData.length,
    totalStudyHours: 120,
  };

  return (
    <div className="px-4 py-8 ">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-8">
        IELTS Preparation Progress
      </h1>
      <div className="w-full mx-auto bg-white p-8 rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Progress */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Progress</h2>
          <ul className="space-y-6">
            {progressData.map((data, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-700">
                    {data.section}
                  </span>
                  <span className="text-lg font-semibold text-[#0052CC]">
                    {data.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${data.progress}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Additional Data */}
        <div className="flex flex-col justify-between">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Target Band Score
            </h3>
            <p className="text-4xl font-bold text-[#0052CC]">
              {additionalData.targetBand}
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Average Progress
            </h3>
            <p className="text-4xl font-bold text-[#0052CC]">
              {Math.round(additionalData.averageProgress)}%
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Total Study Hours
            </h3>
            <p className="text-4xl font-bold text-[#0052CC]">
              {additionalData.totalStudyHours} hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IELTSProgress;
