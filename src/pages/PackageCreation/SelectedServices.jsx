// import React from "react";
// import DraggableItem from "./DraggableItem";
// import DroppableArea from "./DroppableArea";
// import animated from "../../../public/animated.png"




// const SelectedServices = ({ services, onQuantityChange }) => {
//   const totalPrice = services.reduce(
//     (total, service) => total + service.price * (service.quantity || 1),
//     0
//   );


//   const handlePackageCreation = ()=>{
//     console.log(services)

//   }

//   return (
//     <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
//       <div>
//         <h2 className="text-2xl font-semibold m-4 text-start">Your Format</h2>
//         <DroppableArea id="format">
//           {services.length === 0 ? (
//             <div className="text-center">
//               <img
//                 src={animated}
//                 alt="No Services Selected"
//                 className="w-1/2 mx-auto"
//               />
//               <p className="text-gray-500 mt-4">
//                 Your format is empty. Drag services here to add them.
//               </p>
//             </div>
//           ) : (
//             services.map((service) => (
//               <DraggableItem
//                 key={service._id}
//                 service={service}
//                 isRightSide
//                 onQuantityChange={onQuantityChange}
//               />
//             ))
//           )}
//         </DroppableArea>
//       </div>

//       <div className="border-t-2 flex flex-col justify-center py-8 px-4">
//         <div className="flex justify-between items-center my-8">
//           <p className="text-2xl font-semibold">Total Price</p>
//           <p className="text-2xl font-semibold">{totalPrice} Tk</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-8">
          
//           <button className="bg-[#e6eefa] w-full text-gray-700 px-4 py-3 rounded-lg">
//             Save Draft
//           </button>


//           <button
//           disabled={services.length === 0}
//           onClick={handlePackageCreation} 
//           className={` ${services.length != 0 ? "bg-[#0052cc]" :"bg-[#74788d]"}  w-full text-white px-4 py-3 rounded-lg`}>
//             Create Package
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectedServices;










// // step 2

// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const SelectedServices = ({ services, onQuantityChange }) => {
//   const totalPrice = services.reduce(
//     (total, service) => total + service.price * (service.quantity || 1),
//     0
//   );

//   const navigate = useNavigate();

//   const handlePackageCreation = async () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       Swal.fire({
//         icon: "warning",
//         title: "Not Logged In",
//         text: "Please log in to create a package.",
//         confirmButtonText: "Go to Login",
//       }).then(() => {
//         navigate("/login-register");
//       });
//       return;
//     }

//     const packageServiceIds = services.map((service) => service._id); // Extract `_id` for API
//     const payload = {
//       visible: false,
//       packageService: packageServiceIds,
//       features: ["1 Set Reading Question", "1 Set Writing Question"], // Example features
//       tags: ["Reading", "Writing"], // Example tags
//       packageName: "Custom Package", // Example package name
//       price: totalPrice,
//       courseType: "622da53a2c53bc0920df950d", // Example courseType
//       expire: 1,
//       aboutPackage: [
//         {
//           question: "What is this package?",
//           answer: "This is a custom package for your selected services.",
//         },
//       ],
//       eligible:
//         "This package is suitable for all test takers aiming for IELTS success.",
//       description: "A custom package to cater to your needs.",
//       speaking: 1,
//       writing: 1,
//       reading: 1,
//       totalFacilitator: 1,
//       includedFacilitator: true,
//     };

//     try {
//       const response = await axios.post(
//         "https://api.xampro.org/api/v1/package/own-package/createpackage",
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );


//       console.log(response.data)

//       if (response.status === 200 || response.status === 201) {
//         Swal.fire({
//           icon: "success",
//           title: "Package Created",
//           text: "Your package has been created successfully.",
//           confirmButtonText: "Go to Cart",
//         }).then(() => {
//           navigate("/cart-page");
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Package Creation Failed",
//         text: error.response?.data?.message || "Something went wrong.",
//       });
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
//       <div>
//         <h2 className="text-2xl font-semibold m-4 text-start">Your Format</h2>
//         <DroppableArea id="format">
//           {services.length === 0 ? (
//             <div className="text-center">
//               <img
//                 src={animated}
//                 alt="No Services Selected"
//                 className="w-1/2 mx-auto"
//               />
//               <p className="text-gray-500 mt-4">
//                 Your format is empty. Drag services here to add them.
//               </p>
//             </div>
//           ) : (
//             services.map((service) => (
//               <DraggableItem
//                 key={service._id}
//                 service={service}
//                 isRightSide
//                 onQuantityChange={onQuantityChange}
//               />
//             ))
//           )}
//         </DroppableArea>
//       </div>

//       <div className="border-t-2 flex flex-col justify-center py-8 px-4">
//         <div className="flex justify-between items-center my-8">
//           <p className="text-2xl font-semibold">Total Price</p>
//           <p className="text-2xl font-semibold">{totalPrice} Tk</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-8">
//           <button className="bg-[#e6eefa] w-full text-gray-700 px-4 py-3 rounded-lg">
//             Save Draft
//           </button>

//           <button
//             disabled={services.length === 0}
//             onClick={handlePackageCreation}
//             className={`${
//               services.length !== 0 ? "bg-[#0052cc]" : "bg-[#74788d]"
//             } w-full text-white px-4 py-3 rounded-lg`}
//           >
//             Create Package
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectedServices;



// step 3

import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DraggableItem from "./DraggableItem";
import DroppableArea from "./DroppableArea";
import animated from "../../../public/animated.png";
import { createPackage } from "../../utils/api";

const SelectedServices = ({ services, onQuantityChange }) => {
  const totalPrice = services.reduce(
    (total, service) => total + service.price * (service.quantity || 1),
    0
  );

  const navigate = useNavigate();

  const handlePackageCreation = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Not Logged In",
        text: "Please log in to create a package.",
        confirmButtonText: "Go to Login",
      }).then(() => {
        navigate("/login-register", { state: { from: window.location.pathname } }); // Pass the current path
      });
      return;
    }

    const packageServiceIds = services.map((service) => service._id); // Extract `_id` for API
    const features = services.map((service) => service.serviceName); // Extract features dynamically
    const tags = services.map((service) => service.serviceName); // Use service names as tags
    const uniquePackageName = `Custom Package ${new Date().getTime()}`; // Unique package name with timestamp

    const payload = {
      visible: false,
      packageService: packageServiceIds,
      features,
      tags,
      packageName: uniquePackageName, // Dynamic unique package name
      price: totalPrice,
      courseType: "622da53a2c53bc0920df950d", // Example courseType
      expire: 1,
      aboutPackage: [
        {
          question: "What is this package?",
          answer: "This is a custom package created from your selected services.",
        },
      ],
      eligible:
        "This package is suitable for all test takers aiming for IELTS success.",
      description: "A custom package to cater to your needs.",
      speaking: features.includes("Speaking") ? 1 : 0,
      writing: features.includes("Writing") ? 1 : 0,
      reading: features.includes("Reading") ? 1 : 0,
      totalFacilitator: 1,
      includedFacilitator: true,
    };

    try {

      //_________api call

      const response = await createPackage(payload, token);
    

      console.log(response)
      console.log(response.data);

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Package Created",
          text: "Your package has been created successfully.",
          confirmButtonText: "Go to Cart",
        }).then(() => {
          navigate("/cart-page");
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Package Creation Failed",
        text: error.response?.data?.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold m-4 text-start">Your Format</h2>
        <DroppableArea id="format">
          {services.length === 0 ? (
            <div className="text-center">
              <img
                src={animated}
                alt="No Services Selected"
                className="w-1/2 mx-auto"
              />
              <p className="text-gray-500 mt-4">
                Your format is empty. Drag services here to add them.
              </p>
            </div>
          ) : (
            services.map((service) => (
              <DraggableItem
                key={service._id}
                service={service}
                isRightSide
                onQuantityChange={onQuantityChange}
              />
            ))
          )}
        </DroppableArea>
      </div>

      <div className="border-t-2 flex flex-col justify-center py-8 px-4">
        <div className="flex justify-between items-center my-8">
          <p className="text-2xl font-semibold">Total Price</p>
          <p className="text-2xl font-semibold">{totalPrice} Tk</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-8">
          <button className="bg-[#e6eefa] w-full text-gray-700 px-4 py-3 rounded-lg">
            Save Draft
          </button>

          <button
            disabled={services.length === 0}
            onClick={handlePackageCreation}
            className={`${
              services.length !== 0 ? "bg-[#0052cc]" : "bg-[#74788d]"
            } w-full text-white px-4 py-3 rounded-lg`}
          >
            Create Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedServices;
