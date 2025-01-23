import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "../../utils/api";
import { getPackageDataFromLocalStorage } from "../../utils/localStore";
import MyPackages from "./MyPackages";
import MyCourses from "./MyCourses";
import Result from "./Result";

const DashBoard = () => {
  const token = localStorage.getItem("token");
  const courseIds = JSON.parse(localStorage.getItem("courseIds")) || [];

  // packages
  const savedPackages = getPackageDataFromLocalStorage();
  // here from savedPacked show only price, quantity, and serviceName

  console.log(savedPackages);

  const { data: courses, isLoading, isError, error } = useQuery({
    queryKey: ["courses", { token, courseIds }], 
    queryFn: fetchCourses, 
    enabled: !!token && courseIds.length > 0, 
  });

  if (isLoading) {
    return <p>Loading dashboard data...</p>;
  }

  if (isError) {
    return <p className="text-red-500">{error.message || "Failed to fetch data."}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
     <div className="w-full md:w-10/12 mx-auto">
     <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Dashboard</h1>
       <MyCourses courses={courses} />
     
        <MyPackages></MyPackages>
        <Result></Result>
     </div>
    
    </div>
  );
};

export default DashBoard;
