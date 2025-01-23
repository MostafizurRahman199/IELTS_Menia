import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "../../utils/api";
import { getPackageDataFromLocalStorage } from "../../utils/localStore";
import MyPackages from "./MyPackages";
import MyCourses from "./MyCourses";
import Result from "./Result";
import IELTSProgress from "./IELTSProgress";
import Spinner from "../../components/Spinner/Spinner";

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
    return <Spinner></Spinner>
  }

  if (isError) {
    return <p className="text-red-500">{error.message || "Failed to fetch data."}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-6">
     <div className="w-full md:w-10/12 mx-auto">
     <h1 className="text-3xl sm:text-4xl font-bold my-4 text-center text-[#0052CC]">Dashboard</h1>
       <MyCourses courses={courses} />
     
        <MyPackages></MyPackages>
        <IELTSProgress></IELTSProgress>
        <Result></Result>
     </div>
    
    </div>
  );
};

export default DashBoard;
