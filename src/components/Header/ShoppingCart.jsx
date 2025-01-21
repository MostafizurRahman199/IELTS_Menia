// import React from 'react'

// const ShoppingCart = () => {
//   return (
//     <div>ShoppingCart</div>
//   )
// }

// export default ShoppingCart

import { Badge } from "@material-tailwind/react";
import { FaBagShopping } from "react-icons/fa6";

export function ShoppingCart() {
  return (
    <div className="flex items-center gap-8">
      <Badge
        content="4"
        className="text-sm"
        style={{ backgroundColor: "#CCE0FF", color: "#000",  }} // Custom styles
      >
        <FaBagShopping className="text-2xl text-[#0052CC]"  />
      </Badge>
    </div>
  );
}
