



// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const CartPage = () => {
//   const [couponCode, setCouponCode] = useState("");
//   const [discountApplied, setDiscountApplied] = useState(false);


//   const { rightServices } = useSelector(
//     (state) => state.package
//   );

//   console.log(rightServices);

//   const handleApplyCoupon = () => {
//     if (couponCode === "Xampro100") {
//       setDiscountApplied(true);
//     } else {
//       setDiscountApplied(false);
//       alert("Invalid Coupon Code");
//     }
//   };

//   return (
//     <div className="p-4 bg-[#F8F9FC] min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//           {/* Left Section - Cart Items */}
//           <div className="lg:col-span-2">
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   {/* Placeholder for image */}
//                   <div className="w-16 h-16 bg-gray-200 rounded"></div>
//                   <div>
//                     <h2 className="text-lg font-semibold">Full Package vol. 2</h2>
//                     <p className="text-gray-500 text-sm">Duration: 24 June - 29 June 2021</p>
//                     <p className="text-blue-600 font-semibold">Tk. 800</p>
//                   </div>
//                 </div>
//                 <button className="text-red-600 hover:text-red-800 font-semibold text-lg">×</button>
//               </div>
//             </div>

//             <div className="mt-4">
//               <a href="#" className="text-blue-600 hover:underline text-sm">
//                 Continue Shopping
//               </a>
//             </div>
//           </div>

//           {/* Right Section - Pricing Details */}
//           <div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="space-y-4">
//                 <div className="flex justify-between">
//                   <p className="text-gray-600">Price</p>
//                   <p className="font-semibold">Tk. 800</p>
//                 </div>
//                 <div className="flex justify-between">
//                   <p className="text-gray-600">Discount</p>
//                   <p className="font-semibold">- Tk. {discountApplied ? "100" : "0"}</p>
//                 </div>
//                 <div className="flex justify-between">
//                   <p className="text-gray-600">VAT</p>
//                   <p className="font-semibold">Tk. 50</p>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between">
//                   <p className="font-semibold">Grand Total</p>
//                   <p className="font-semibold">Tk. {discountApplied ? "750" : "850"}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="text"
//                     placeholder="Apply Coupon"
//                     className="border rounded-lg p-2 w-full"
//                     value={couponCode}
//                     onChange={(e) => setCouponCode(e.target.value)}
//                   />
//                   <button
//                     onClick={handleApplyCoupon}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//                   >
//                     Apply
//                   </button>
//                 </div>
//                 {discountApplied && (
//                   <p className="text-green-600 text-sm mt-2">
//                     100% Discount coupon applied successfully
//                   </p>
//                 )}
//                 <hr />
//                 <div className="flex justify-between">
//                   <p className="text-lg font-semibold">Total</p>
//                   <p className="text-lg font-semibold">
//                     Tk. {discountApplied ? "750" : "850"}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     id="terms"
//                     className="w-5 h-5"
//                   />
//                   <label htmlFor="terms" className="text-gray-600 text-sm">
//                     I agree to all terms and conditions
//                   </label>
//                 </div>
//                 <button
//                   className="bg-gray-400 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-500"
//                   disabled={!discountApplied}
//                 >
//                   Payment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;



// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart } from "../../store/features/courseSlice";
// import { removeFromRightServices } from "../../store/features/packageSlice";
// import Swal from "sweetalert2";

// const CartPage = () => {

//   const [couponCode, setCouponCode] = useState("");
//   const [discountApplied, setDiscountApplied] = useState(false);

//   const dispatch = useDispatch();

//   // Get data from Redux
//   const { cartCourses } = useSelector((state) => state.course);
//   const { rightServices } = useSelector((state) => state.package);


//   console.log(cartCourses);
//     console.log(rightServices);

//   // Calculate totals
//   const courseTotal = cartCourses.reduce((sum, course) => sum + course.price - course.discount, 0);
//   const packageTotal = rightServices.reduce((sum, pkg) => sum + pkg.price * (pkg.quantity || 1), 0);
//   const totalPrice = courseTotal + packageTotal;

//   const handleApplyCoupon = () => {
//     if (couponCode === "Xampro100") {
//       setDiscountApplied(true);
//       Swal.fire({
//         icon: "success",
//         title: "Coupon Applied",
//         text: "100% Discount coupon applied successfully.",
//       });
//     } else {
//       setDiscountApplied(false);
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Coupon",
//         text: "Please enter a valid coupon code.",
//       });
//     }
//   };

//   const handleRemoveCourse = (id) => {
//     dispatch(removeFromCart(id));
//     Swal.fire({
//       icon: "info",
//       title: "Removed",
//       text: "Course removed from cart.",
//     });
//   };

//   const handleRemovePackage = (id) => {
//     dispatch(removeFromRightServices(id));
//     Swal.fire({
//       icon: "info",
//       title: "Removed",
//       text: "Package removed from cart.",
//     });
//   };

//   return (
//     <div className="p-4 bg-[#F8F9FC] min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Left Section - Cart Items */}
//           <div className="lg:col-span-1">
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h2 className="text-xl font-semibold mb-4">Your Items</h2>
//               {cartCourses.map((course) => (
//                 <div key={course._id} className="flex border-2 border-[#E5E5F0] rounded-md p-3 items-center justify-between mb-4">
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={course.photo}
//                       alt={course.packageName}
//                       className="w-20 h-20 object-cover rounded-md"
//                     />
//                     <div>
//                       <h3 className="text-lg font-semibold">{course.packageName}</h3>
//                       <p className="text-[#74788D] text-sm">{course.tags.join(", ")}</p>
//                       <p className="text-blue-600 font-semibold">
//                         Tk. {course.price - course.discount}
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => handleRemoveCourse(course._id)}
//                     className="text-red-600 hover:text-red-800 font-semibold text-lg"
//                   >
//                     ×
//                   </button>
//                 </div>
//               ))}

//               {rightServices.map((pkg) => (
//                 <div key={pkg._id} className="flex items-center justify-between mb-4  border-2 border-[#E5E5F0] rounded-md p-3">
//                   <div className="flex items-center gap-4">
//                     <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
//                     <div>
//                       <h3 className="text-lg font-semibold">{pkg.packageName}</h3>
//                       <p className="text-gray-500 text-sm">Quantity: {pkg.quantity || 1}</p>
//                       <p className="text-blue-600 font-semibold">
//                         Tk. {pkg.price * (pkg.quantity || 1)}
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => handleRemovePackage(pkg._id)}
//                     className="text-red-600 hover:text-red-800 font-semibold text-lg"
//                   >
//                     ×
//                   </button>
//                 </div>
//               ))}

//               {cartCourses.length === 0 && rightServices.length === 0 && (
//                 <p className="text-center text-gray-500">Your cart is empty.</p>
//               )}
//             </div>

//             <div className="mt-4">
//               <a href="#" className="text-blue-600 hover:underline text-sm">
//                 Continue Shopping
//               </a>
//             </div>
//           </div>

//           {/* Right Section - Pricing Details */}
//           <div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="space-y-4">
//                 <div className="flex justify-between">
//                   <p className="text-gray-600">Price</p>
//                   <p className="font-semibold">Tk. {totalPrice}</p>
//                 </div>
//                 <div className="flex justify-between">
//                   <p className="text-gray-600">Discount</p>
//                   <p className="font-semibold">
//                     - Tk. {discountApplied ? totalPrice * 0.1 : "0"}
//                   </p>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between">
//                   <p className="font-semibold">Grand Total</p>
//                   <p className="font-semibold">
//                     Tk. {discountApplied ? totalPrice - totalPrice * 0.1 : totalPrice}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="text"
//                     placeholder="Apply Coupon"
//                     className="border rounded-lg p-2 w-full"
//                     value={couponCode}
//                     onChange={(e) => setCouponCode(e.target.value)}
//                   />
//                   <button
//                     onClick={handleApplyCoupon}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//                   >
//                     Apply
//                   </button>
//                 </div>
//                 <button
//                   className={`w-full px-4 py-2 rounded-lg mt-4 ${
//                     discountApplied ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
//                   } text-white`}
//                   disabled={!discountApplied}
//                 >
//                   Checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;



import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import PaymentDetails from "./PaymentDetails";


// import Swal from "sweetalert2";

const CartPage = () => {
  const [couponCode, setCouponCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  // Get data from Redux
  const { cartCourses } = useSelector((state) => state.course);
  const { rightServices } = useSelector((state) => state.package);

  // Calculate totals
  const courseTotal = cartCourses.reduce((sum, course) => sum + course.price - course.discount, 0);
  const packageTotal = rightServices.reduce((sum, pkg) => sum + pkg.price * (pkg.quantity || 1), 0);
  const totalPrice = courseTotal + packageTotal;

  return (
    <div className="p-4 bg-[#F8F9FC] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CartItems cartCourses={cartCourses} rightServices={rightServices} />
          <PaymentDetails
          cartCourses={cartCourses} 
          rightServices={rightServices}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            discountApplied={discountApplied}
            setDiscountApplied={setDiscountApplied}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
