

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const DashBoard = () => {
//   const [courses, setCourses] = useState([]);
//   const [packages, setPackages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);


  

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setError("User is not logged in.");
//           setLoading(false);
//           return;
//         }

//         // Retrieve course IDs from local storage
//         const courseIds = JSON.parse(localStorage.getItem("courseIds")) || [];

//         // Fetch each course's details
//         const coursePromises = courseIds.map((courseId) =>
//           axios.get(
//             `https://api.xampro.org/api/v1/package/getsinglepackage/${courseId}`,
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           )
//         );

//         // Wait for all course fetch promises to resolve
//         const courseResponses = await Promise.all(coursePromises);

//         // Extract and set course data
//         const fetchedCourses = courseResponses.map((response) => response.data.singlePackage);
//         setCourses(fetchedCourses);

//         console.log("Fetched Courses:", fetchedCourses);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (loading) {
//     return <p>Loading dashboard data...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <div className="min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       {courses.length > 0 ? (
//         <ul>
//           {courses.map((course) => (
//             <li key={course._id} className="mb-4">
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h2 className="text-xl font-semibold">{course.packageName}</h2>
//                 <p>{course.description}</p>
//                 <p className="text-gray-500">Price: Tk. {course.price}</p>
//                 <p className="text-gray-500">Validity: {course.validity} days</p>
//                 <img
//                   src={course.photo}
//                   alt={course.packageName}
//                   className="w-full h-40 object-cover rounded-lg mt-2"
//                 />
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No courses found.</p>
//       )}
//     </div>
//   );
// };

// export default DashBoard;




import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "../../utils/api";
import { getPackageDataFromLocalStorage } from "../../utils/localStore";



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
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {courses && courses.length > 0 ? (
        <ul>
          {courses.map((course) => (
            <li key={course._id} className="mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{course.packageName}</h2>
                <p>{course.description}</p>
                <p className="text-gray-500">Price: Tk. {course.price}</p>
                <p className="text-gray-500">Validity: {course.validity} days</p>
                <img
                  src={course.photo}
                  alt={course.packageName}
                  className="w-full h-40 object-cover rounded-lg mt-2"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default DashBoard;
