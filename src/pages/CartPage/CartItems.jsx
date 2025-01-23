import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/features/courseSlice";
import { removeFromRightServices } from "../../store/features/packageSlice";
import Swal from "sweetalert2";




const CartItems = ({ cartCourses, rightServices }) => {
  const dispatch = useDispatch();


  const serviceImages = {
    reading: "https://images.ctfassets.net/lhzh8coidz9i/5c1EtPiGIRMlzcfE0SXUN/d196ecf77936ecc987b2c06165edd802/science-of-reading-202112.jpg",
    writing: "https://ursdayton.org/wp-content/uploads/2020/08/handwriting.jpg",
    listening: "https://www.splashlearn.com/blog/wp-content/uploads/2024/03/audio-books-and-podcasts.jpg",
    speaking: "https://cdn.corporatefinanceinstitute.com/assets/public-speaking-1024x821.jpeg",
  };



  // console.log(rightServices)
  // console.log(cartCourses)

  const handleRemoveCourse = (id) => {
    dispatch(removeFromCart(id));
    Swal.fire({
      icon: "info",
      title: "Removed",
      text: "Course removed from cart.",
    });
  };

  const handleRemovePackage = (id) => {
    dispatch(removeFromRightServices(id));
    Swal.fire({
  icon: "info",
  title: "Removed",
  text: "Package removed from cart.",
  showConfirmButton: false,
  timer: 1000,
});
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Items</h2>
      {cartCourses.map((course) => (
        <div key={course._id} className="relative flex border-2 border-[#E5E5F0] rounded-md p-3 items-center justify-between mb-4">
          <div className="flex flex-col sm:flex sm:flex-row items-center gap-4">
            <img
              src={course.photo}
              alt={course.packageName}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-semibold">{course.packageName}</h3>
              <p className="text-[#74788D] text-sm">{course.tags.join(", ")}</p>
              <p className="text-blue-600 font-semibold">
                Tk. {course.price - course.discount}
              </p>
            </div>
          </div>

          <div className="absolute top-2 right-4">
          <button
            onClick={() => handleRemoveCourse(course._id)}
            className=" text-black hover:text-red-500 text-3xl font-extralight "
          >
            ×
          </button>
          </div>
        </div>
      ))}

      {rightServices.map((pkg) => (
        <div key={pkg._id} className="relative flex items-center justify-between mb-4  border-2 border-[#E5E5F0] rounded-md p-3">
          <div className="flex flex-col sm:flex sm:flex-row items-center gap-4">
            <div className=" bg-gray-200 rounded-md w-20 h-20">
            <img className="object-cover rounded-md w-20 h-20" src={serviceImages[pkg.serviceName.toLowerCase()] || "https://via.placeholder.com/150"}
              alt={pkg.serviceName}
            />
            </div>
            <div>
             <h3 className="text-lg font-semibold">Full Package of {pkg.serviceName.charAt(0).toUpperCase() + pkg.serviceName.slice(1)}</h3>
              <p className="text-[#74788D] text-sm">Quantity: {pkg.quantity || 1}</p>
              <p className="text-blue-600 font-semibold">
                Tk. {pkg.price * (pkg.quantity || 1)}
              </p>
            </div>
          </div>
          <div className="absolute top-2 right-4">
          <button
            onClick={() => handleRemovePackage(pkg._id)}
            className="text-black hover:text-red-500 text-3xl font-extralight "
          >
            ×
          </button>
          </div>
        </div>
      ))}

      {cartCourses.length === 0 && rightServices.length === 0 && (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartItems;
