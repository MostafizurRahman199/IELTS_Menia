


// import React from "react";
// import { FaRegClock } from "react-icons/fa6";
// import { FaBook, FaHeadphones, FaPencilAlt, FaMicrophone } from "react-icons/fa";
// const CourseCard = ({ course }) => {



//   const tagIcons = {
//     "7+ Guarantee": <FaBook />,
//     "General Reading": <FaBook />,
//     "General Writing": <FaPencilAlt />,
//     "Speaking": <FaMicrophone />,
//     "Listening": <FaHeadphones />,
//   };


//   const totalRatings = course.ratings.length; // Total number of people who rated
//   const discountedPrice = course.price - course.discount; // Calculate discounted price

//   return (
//     <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
//       {/* Course Image */}
     
//      <div>
//      <div className="relative">
//         <img
//           src={course.photo}
//           alt={course.packageName}
//           className="w-full h-40 object-cover rounded-t-2xl mb-4"
//         />
//         <button className="absolute top-3 right-3 bg-white p-2 rounded-md shadow-md hover:bg-gray-100">
//           {/* Bookmark Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             className="w-5 h-5 text-blue-600"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M5 3v16l7-5 7 5V3a2 2 0 00-2-2H7a2 2 0 00-2 2z"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Course Details */}
//       <div className="space-y-2">
//         {/* Ratings and Duration */}
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-1">
//             <span className="text-yellow-500 text-2xl">
//               {/* Render Stars */}
//               {"★".repeat(Math.round(course.aveRatings))}
//               {"☆".repeat(5 - Math.round(course.aveRatings))}
//             </span>
            
//             <span className="text-sm text-gray-500">5.00 ({totalRatings})</span>
//           </div>
//           <span className="bg-[#e6eefa] flex items-center gap-1 text-[#0052CC] text-xs px-2 py-1 rounded-xl">
  
//             <FaRegClock /> <span> {course.expire} Days</span>
//           </span>
//         </div>

//         {/* Title */}
//         <h3 className="text-lg font-semibold text-gray-800">
//           {course.packageName}
//         </h3>

//         {/* Features */}
//         <div className="flex flex-col gap-2  text-sm">
//           {course.tags.slice(0, 4).map((tag, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <span className="text-[#0052CC]">{tagIcons[tag] || <FaBook />}</span>
//               <span className="text-[#516986]">{tag}</span>
//             </div>
//           ))}
//         </div>


//         {/* Price and Add to Cart */}
//       </div>

//      </div>

//         <div className="flex flex-col-reverse gap-2 sm:flex sm:flex-row justify-between sm:items-center mt-4 border-t pt-4">
//         <button className="bg-[#0052CC] text-white text-sm px-4 py-3 rounded-xl hover:bg-blue-700">
//             Add to cart
//           </button>
//           <div className="flex items-center md:gap-2">
//             <p className="text-[#0052CC] line-through text-lg font-semibold">
//               Tk. {course.price}
//             </p>
//             <p className="text-[#253642] font-semibold text-lg">Tk. {discountedPrice}</p>
//           </div>
        
//         </div>


//     </div>
//   );
// };

// export default CourseCard;
 




import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features/courseSlice"; // Import the addToCart action
import Swal from "sweetalert2"; // Import SweetAlert2
import { FaRegClock } from "react-icons/fa6";
import { FaBook, FaHeadphones, FaPencilAlt, FaMicrophone } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();

  const tagIcons = {
    "7+ Guarantee": <FaBook />,
    "General Reading": <FaBook />,
    "General Writing": <FaPencilAlt />,
    Speaking: <FaMicrophone />,
    Listening: <FaHeadphones />,
  };

  const totalRatings = course.ratings.length; // Total number of people who rated
  const discountedPrice = course.price - course.discount; // Calculate discounted price

  const handleAddToCart = () => {
    dispatch(addToCart(course)); // Dispatch the addToCart action
    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: `"${course.packageName}" has been added to your cart.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      {/* Course Image */}
      <div>
        <div className="relative">
          <img
            src={course.photo}
            alt={course.packageName}
            className="w-full h-40 object-cover rounded-t-2xl mb-4"
          />
          <button className="absolute top-3 right-3 bg-white p-2 rounded-md shadow-md hover:bg-gray-100">
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
        </div>

        {/* Course Details */}
        <div className="space-y-2">
          {/* Ratings and Duration */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-2xl">
                {"★".repeat(Math.round(course.aveRatings))}
                {"☆".repeat(5 - Math.round(course.aveRatings))}
              </span>
              <span className="text-sm text-gray-500">
                5.00 ({totalRatings})
              </span>
            </div>
            <span className="bg-[#e6eefa] flex items-center gap-1 text-[#0052CC] text-xs px-2 py-1 rounded-xl">
              <FaRegClock /> <span>{course.expire} Days</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800">
            {course.packageName}
          </h3>

          {/* Features */}
          <div className="flex flex-col gap-2 text-sm">
            {course.tags.slice(0, 4).map((tag, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-[#0052CC]">
                  {tagIcons[tag] || <FaBook />}
                </span>
                <span className="text-[#516986]">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Price and Add to Cart */}
      <div className="flex flex-col-reverse gap-2 sm:flex sm:flex-row justify-between sm:items-center mt-4 border-t pt-4">
        <button
          onClick={handleAddToCart} // Add to cart on click
          className="bg-[#0052CC] text-white text-sm px-4 py-3 rounded-xl hover:bg-blue-700"
        >
          Add to cart
        </button>
        <div className="flex items-center md:gap-2">
          <p className="text-[#0052CC] line-through text-lg font-semibold">
            Tk. {course.price}
          </p>
          <p className="text-[#253642] font-semibold text-lg">
            Tk. {discountedPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
