// // src/pages/DashBoard/MyCourses.jsx
// import React from "react";

// const MyCourses = ({ courses }) => {
//   return (
//     <div>
//       <h1 className="text-3xl font-semibold my-4">My Courses</h1>
//       <div>
//         {courses && courses.length > 0 ? (
//           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {courses.map((course) => (
//               <li key={course._id} className="mb-4">
//                 <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//                   <h2 className="text-xl font-semibold text-gray-900">{course.packageName}</h2>
//                   <p className="text-gray-500">Price: Tk. {course.price}</p>
//                   <p className="text-gray-500">Validity: {course.validity} days</p>
//                   <img
//                     src={course.photo}
//                     alt={course.packageName}
//                     className="w-full h-40 object-cover rounded-lg mt-2"
//                   />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-center text-gray-500">No courses found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyCourses;



import React from "react";

const MyCourses = ({ courses }) => {
  return (
    <div className="px-4 py-8  ">
        <div className='w-full flex justify-start'>
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">My Courses</h1>
      </div>
      <div className="max-w-7xl mx-auto">
        {courses && courses.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <li key={course._id}>
                <div className="bg-white rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <img
                    src={course.photo || "https://via.placeholder.com/150"}
                    alt={course.packageName}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-2xl font-semibold text-blue-600 mb-2">{course.packageName.slice(0,23)}</h2>
                  <p className="text-lg text-gray-700 mb-1">
                    <strong>Price:</strong> Tk. {course.price}
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Validity:</strong> {course.validity} days
                  </p>
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
