
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { savePackageDataToLocalStorage, updateLocalStorageIds } from "../../utils/localStore";
import { createOrder } from "../../utils/api";

const PaymentDetails = ({
  couponCode,
  setCouponCode,
  discountApplied,
  setDiscountApplied,
  totalPrice,
  cartCourses,
  rightServices,
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  console.log(rightServices)

  const handleApplyCoupon = () => {
    if (couponCode === "Xampro100") {
      setDiscountApplied(true);
      Swal.fire({
        icon: "success",
        title: "Coupon Applied",
        text: "100% Discount coupon applied successfully.",
      });
    } else {
      setDiscountApplied(false);
      Swal.fire({
        icon: "error",
        title: "Invalid Coupon",
        text: "Please enter a valid coupon code.",
      });
    }
  };

  const handlePayment = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Not Logged In",
        text: "Please log in to proceed with payment.",
        confirmButtonText: "Go to Login",
      }).then(() => {
        navigate("/login-register", { state: { from: "/cart-page" } }); // Pass current page for redirection
      });
      return;
    }

    // Prepare course and package IDs
    const courseIds = cartCourses.map((course) => course._id);
    const packageIds = rightServices.map((pkg) => pkg._id);

    console.log(rightServices);

    const payload = {
      packageData: [...rightServices],
      price: totalPrice,
      mainPrice: totalPrice,
      discount: discountApplied ? totalPrice * 0.1 : 0,
    };

    try {
      const response = await createOrder(couponCode, payload, token);

      console.log(response.data);

      
      
      if (response.status === 200 || response.status === 201) {

        updateLocalStorageIds("courseIds", courseIds);
        // updateLocalStorageIds("packageIds", packageIds);
        savePackageDataToLocalStorage(rightServices);
     

        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your payment has been completed.",
          confirmButtonText: "Close",
          timer: 500,
          timerProgressBar: true,
        }).then(() => {
         navigate("/dashboard");
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: error.response?.data?.message || "Something went wrong.",
      });
    }
  };

  const discount = discountApplied ? totalPrice * 0.1 : 0;
  const vat = (totalPrice - discount) * 0.02;
  const grandTotal = totalPrice - discount + vat;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
      <div className="space-y-4">
        {/* Price */}
        <div className="flex justify-between">
          <p className="text-gray-600">Price</p>
          <p className="">Tk. {totalPrice.toFixed(2)}</p>
        </div>

        {/* Discount */}
        <div className="flex justify-between">
          <p className="text-gray-600">Discount</p>
          <p className="">- Tk. {discount.toFixed(2)}</p>
        </div>

        {/* VAT */}
        <div className="flex justify-between">
          <p className="text-gray-600">VAT (2%)</p>
          <p className="">Tk. {vat.toFixed(2)}</p>
        </div>

        <hr />

        {/* Grand Total */}
        <div className="flex justify-between">
          <p className="font-semibold text-lg">Grand Total</p>
          <p className="font-semibold text-lg">Tk. {grandTotal.toFixed(2)}</p>
        </div>

        {/* Apply Coupon */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p>Apply Coupon</p>
          </div>
          <div className="flex items-center gap-2 border rounded-lg p-2">
            <input
              type="text"
              placeholder="Apply Coupon"
              className="p-2 w-full rounded-lg focus:outline-none"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-[#0052cc] text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
        {discountApplied && (
          <p className="text-[#00AF70] text-sm mt-2 text-end">
            100% Discount coupon applied successfully
          </p>
        )}

        <hr />

        {/* Total */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-lg font-semibold">
            Tk. {discountApplied ? "0.00" : grandTotal.toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between gap-2">
          {/* Terms and Conditions */}
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="terms"
              className="w-5 h-5"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I agree to all terms and conditions
            </label>
          </div>

          {/* Payment Button */}
          <button
            className={`w-fit px-4 py-2 rounded-lg mt-4 ${
              termsAccepted ? "bg-[#0052cc] hover:bg-blue-700" : "bg-gray-400"
            } text-white`}
            disabled={!termsAccepted}
            onClick={handlePayment}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
