


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
    <div className="p-4 bg-[#F8F9FC] min-h-screen ">
      <div className="w-ful sm:w-10/12 mx-auto pt-4">
        <h1 className="text-xl font-semibold mb-6">Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-md bg-white rounded-lg sm:p-8">
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
