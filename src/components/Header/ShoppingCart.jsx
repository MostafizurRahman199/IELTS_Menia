



// import React from "react";
// import { useSelector } from "react-redux"; // Import useSelector to access Redux state
// import { Badge } from "@material-tailwind/react";
// import { FaBagShopping } from "react-icons/fa6";

// export function ShoppingCart() {
//   // Get the number of items in the cart from the Redux store
//   const cartItemCount = useSelector((state) => state.course.cartCourses.length);

//   return (
//     <div className="flex items-center gap-8">
//       <Badge
//         content={cartItemCount} // Dynamically display the cart item count
//         className="text-sm"
//         style={{
//           backgroundColor: "#CCE0FF",
//           color: "#000",
//           padding: "2px",
//           // paddingRight: "2px",
//           // paddingTop:"0px",
//           paddingBottom:"0px",
//           fontSize: "12px", // Adjust this value for smaller text
//         }} // Custom styles
//       >
//         <FaBagShopping className="text-2xl text-[#0052CC]" />
//       </Badge>
//     </div>
//   );
// }


// import React from "react";
// import { useSelector } from "react-redux"; // Import useSelector to access Redux state
// import { FaBagShopping } from "react-icons/fa6";

// export function ShoppingCart() {
//   // Get the number of items in the cart from the Redux store
//   const cartItemCount = useSelector((state) => state.course.cartCourses.length);

//   return (
//     <div className="relative flex items-center">
//       {/* Shopping Bag Icon */}
//       <FaBagShopping className="text-3xl text-[#0052CC]" />

//       {/* Custom Badge */}
//       {cartItemCount > 0 && (
//         <div
//           className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-300 to-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-md"
//           style={{
//             padding: "1px",
//             border: "2px solid white", // Adds a border for a clean separation from the background
//           }}
//         >
//           {cartItemCount}
//         </div>
//       )}
//     </div>
//   );
// }




import React from "react";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import { FaBagShopping } from "react-icons/fa6";

export function ShoppingCart() {
  // Get the number of items in the cart from the Redux store
  const cartItemCount = useSelector((state) => state.course.cartCourses.length);

  return (
    <div className="relative flex items-center">
      {/* Shopping Bag Icon */}
      <FaBagShopping className="text-3xl text-[#0052CC]" />

      {/* Badge (Always Rendered) */}
      <div
        className={`absolute -top-2 -right-2 rounded-full h-6 w-6 flex items-center justify-center  transition-all duration-200 text-sm ${
          cartItemCount > 0
            ? "bg-[#CCE0FF] text-black shadow-md"
            : "bg-transparent text-transparent"
        }`}
        style={{
          padding: "1px",
          border: cartItemCount > 0 ? "2px solid white" : "none",
        }}
      >
        {cartItemCount > 0 ? cartItemCount : null}
      </div>
    </div>
  );
}

