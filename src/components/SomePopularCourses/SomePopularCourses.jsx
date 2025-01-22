// import React from 'react'

// const SomePopularCourses = () => {

// //have to use tanSack query to get the data from the api
// // also suggest folder structure as i will use redux
// // api link  : https://api.xampro.org/api/v1/package/get-top-three-popular-package

//   return (
//     <div>SomePopularCourses</div>
//   )
// }

// export default SomePopularCourses

import React from "react";
import { useQuery } from "@tanstack/react-query";

import CourseCard from "./CourseCard";
import { fetchClient } from "../../utils/fetchClient";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const fetchPopularCourses = () =>
  fetchClient(
    "https://api.xampro.org/api/v1/package/get-top-three-popular-package"
  );

const SomePopularCourses = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popularCourses"], // Use the defined query key
    queryFn: fetchPopularCourses, // Function to fetch data
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });

  if (isLoading) {
    return <p>Loading popular courses...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const courses = data?.getData || [];

  return (
    <div className="w-full bg-[#e6eefa]">
      <div className="w-10/12 mx-auto py-16">
        <h2 className="text-4xl font-semibold mb-10 text-center text-[#1E266D]">
          Some popular courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="flex justify-end items-center mt-12">
          <div className="flex items-center gap-2  border-b-2 border-[#0052CC] text-[#0052CC]">
            <Link to="#" className="font-semibold   inline-block">
            See All Pack
            </Link>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomePopularCourses;
