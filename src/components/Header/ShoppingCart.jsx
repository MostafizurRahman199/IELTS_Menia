

// import { Badge } from "@material-tailwind/react";
// import { FaBagShopping } from "react-icons/fa6";

// export function ShoppingCart() {
//   return (
//     <div className="flex items-center gap-8">
//       <Badge
//         content="4"
//         className="text-sm"
//         style={{ backgroundColor: "#CCE0FF", color: "#000",  }} // Custom styles
//       >
//         <FaBagShopping className="text-2xl text-[#0052CC]"  />
//       </Badge>
//     </div>
//   );
// }



import React from "react";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import { Badge } from "@material-tailwind/react";
import { FaBagShopping } from "react-icons/fa6";

export function ShoppingCart() {
  // Get the number of items in the cart from the Redux store
  const cartItemCount = useSelector((state) => state.course.cartCourses.length);

  return (
    <div className="flex items-center gap-8">
      <Badge
        content={cartItemCount} // Dynamically display the cart item count
        className="text-sm"
        style={{ backgroundColor: "#CCE0FF", color: "#000" }} // Custom styles
      >
        <FaBagShopping className="text-2xl text-[#0052CC]" />
      </Badge>
    </div>
  );
}

