

// import React, { useEffect } from "react";
// import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
// import { useQuery } from "@tanstack/react-query";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToRightServices,
//   removeFromRightServices,
//   setLeftServices,
//   setPackageName,
//   setCourseType,
//   updateQuantity,
// } from "../../store/features/packageSlice";
// import { fetchClient } from "../../utils/fetchClient";
// import { FaBars, FaBookReader, FaHeadphones, FaPen, FaMicrophone } from "react-icons/fa";
// import packageCreationCard from "../../../public/packageCreationCard.png";
// import animated from "../../../public/animated.png";

// const DraggableItem = ({ service, isRightSide, onQuantityChange }) => {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: service._id,
//   });

//   const style = {
//     transform: transform
//       ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
//       : undefined,
//   };

//   const icons = {
//     reading: <FaBookReader />,
//     listening: <FaHeadphones />,
//     writing: <FaPen />,
//     speaking: <FaMicrophone />,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       {...listeners}
//       {...attributes}
//       style={style}
//       className="flex justify-between items-center border p-3 rounded-lg mb-2 bg-white cursor-pointer"
//     >
//       <div className="flex items-center gap-2">
//         <FaBars className="text-gray-400" />
//         <span className="text-[#0052CC] border rounded-full p-2 border-[#0052CC]">
//           {icons[service.serviceName.toLowerCase()] || <FaBookReader />}
//         </span>
//         <span>{service.serviceName}</span>
//       </div>
//       <div className="flex items-center gap-4">
//         {isRightSide && (
//           <select
//             value={service.quantity || 1}
//             onChange={(e) => onQuantityChange(service._id, parseInt(e.target.value, 10))}
//             className="border rounded p-1"
//           >
//             {[1, 2, 3, 4, 5].map((num) => (
//               <option key={num} value={num}>
//                 {num}
//               </option>
//             ))}
//           </select>
//         )}
//         <span className="font-semibold">{service.price * (service.quantity || 1)} Tk</span>
//       </div>
//     </div>
//   );
// };

// const DroppableArea = ({ id, children }) => {
//   const { isOver, setNodeRef } = useDroppable({ id });

//   const style = {
//     backgroundColor: isOver ? "#f0f9ff" : "white",
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className="p-4 rounded-lg bg-gray-50 h-[20rem] "
//     >
//       {children}
//     </div>
//   );
// };

// const PackageCreation = () => {
//   const dispatch = useDispatch();
//   const { leftServices, rightServices, packageName, courseType } = useSelector(
//     (state) => state.package
//   );

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["package-create"],
//     queryFn: () => fetchClient("https://api.xampro.org/api/v1/service/getallservices"),
//     onSuccess: (data) => {
//       dispatch(setLeftServices(data?.getDatas));
//     },
//   });

//   useEffect(() => {
//     if (data) {
//       dispatch(setLeftServices(data?.getDatas));
//     }
//   }, [data, dispatch]);

//   const handleDragEnd = ({ active, over }) => {
//     if (!over) return;

//     const draggedService = leftServices.find(
//       (service) => service._id === active.id
//     ) || rightServices.find((service) => service._id === active.id);

//     if (!draggedService) return;

//     if (over.id === "format" && leftServices.includes(draggedService)) {
//       dispatch(addToRightServices({ ...draggedService, quantity: 1 }));
//       dispatch(setLeftServices(leftServices.filter((s) => s._id !== active.id)));
//     } else if (over.id === "services" && rightServices.includes(draggedService)) {
//       dispatch(removeFromRightServices(draggedService._id));
//       dispatch(setLeftServices([...leftServices, draggedService]));
//     }
//   };

//   const handleQuantityChange = (id, quantity) => {
//     dispatch(updateQuantity({ id, quantity }));
//   };

//   const totalPrice = rightServices.reduce(
//     (total, service) => total + service.price * (service.quantity || 1),
//     0
//   );

//   if (isLoading) return <p>Loading services...</p>;
//   if (error) return <p>Error fetching services</p>;

//   return (
//     <div className="bg-[#f8f8fb]">
//       <div className="p-6 w-full sm:w-10/12 mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold">Create Package</h1>
//           <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg">
//             Draft Package
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div className="flex flex-col gap-1">
//             <label htmlFor="" className="text-[#74788D]">
//               Package Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter package name"
//               className="border p-3 rounded-lg w-full"
//               value={packageName}
//               onChange={(e) => dispatch(setPackageName(e.target.value))}
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label htmlFor="" className="text-[#74788D]">
//               Course Type
//             </label>
//             <select
//               className="border p-3 rounded-lg"
//               value={courseType}
//               onChange={(e) => dispatch(setCourseType(e.target.value))}
//             >
//               <option value="IELTS General">IELTS General</option>
//               <option value="IELTS Academic">IELTS Academic</option>
//             </select>
//           </div>
//         </div>

//         <DndContext onDragEnd={handleDragEnd}>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h2 className="text-2xl font-semibold m-4 text-start">
//                 List of the Service
//               </h2>
//               <DroppableArea id="services">
//                 {leftServices.map((service) => (
//                   <DraggableItem key={service._id} service={service} />
//                 ))}
//               </DroppableArea>
//               <div className="mt-6">
//                 <img
//                   src={packageCreationCard}
//                   alt="Package Creation Illustration"
//                   className="w-full rounded-lg"
//                 />
//               </div>
//             </div>

//             <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
//               <div>
//                 <h2 className="text-2xl font-semibold m-4 text-start">
//                   Your Format
//                 </h2>
//                 <DroppableArea id="format">
//                   {rightServices.length === 0 ? (
//                     <div className="text-center">
//                       <img
//                         src={animated}
//                         alt="No Services Selected"
//                         className="w-1/2 mx-auto"
//                       />
//                       <p className="text-gray-500 mt-4">
//                         Your format is empty. Drag services here to add them.
//                       </p>
//                     </div>
//                   ) : (
//                     rightServices.map((service) => (
//                       <DraggableItem
//                         key={service._id}
//                         service={service}
//                         isRightSide
//                         onQuantityChange={handleQuantityChange}
//                       />
//                     ))
//                   )}
//                 </DroppableArea>
//               </div>

//               <div className="border-t-2 flex flex-col justify-center py-8 px-4">
//                 <div className="flex justify-between items-center my-8">
//                   <p className="text-2xl font-semibold">Total Price</p>
//                   <p className="text-2xl font-semibold">{totalPrice} Tk</p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-8">
//                   <button className="bg-[#e6eefa] w-full text-gray-700 px-4 py-3 rounded-lg">
//                     Save Draft
//                   </button>
//                   <button className="bg-[#74788d] w-full text-white px-4 py-3 rounded-lg">
//                     Create Package
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </DndContext>
//       </div>
//     </div>
//   );
// };

// export default PackageCreation;

import React, { useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  addToRightServices,
  removeFromRightServices,
  setLeftServices,
  setPackageName,
  setCourseType,
  updateQuantity,
} from "../../store/features/packageSlice";
import ServiceList from "./ServiceList";
import SelectedServices from "./SelectedServices";
import { fetchClient } from "../../utils/fetchClient";

const PackageCreation = () => {
  const dispatch = useDispatch();
  const { leftServices, rightServices, packageName, courseType } = useSelector(
    (state) => state.package
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["package-create"],
    queryFn: () => fetchClient("https://api.xampro.org/api/v1/service/getallservices"),
    onSuccess: (data) => {
      dispatch(setLeftServices(data?.getDatas));
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(setLeftServices(data?.getDatas));
    }
  }, [data, dispatch]);

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const draggedService = leftServices.find(
      (service) => service._id === active.id
    ) || rightServices.find((service) => service._id === active.id);

    if (!draggedService) return;

    if (over.id === "format" && leftServices.includes(draggedService)) {
      dispatch(addToRightServices({ ...draggedService, quantity: 1 }));
      dispatch(setLeftServices(leftServices.filter((s) => s._id !== active.id)));
    } else if (over.id === "services" && rightServices.includes(draggedService)) {
      dispatch(removeFromRightServices(draggedService._id));
      dispatch(setLeftServices([...leftServices, draggedService]));
    }
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  if (isLoading) return <p>Loading services...</p>;
  if (error) return <p>Error fetching services</p>;

  return (
    <div className="bg-[#f8f8fb]">
      <div className="p-6 w-full sm:w-10/12 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Create Package</h1>
          <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg">
            Draft Package
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-[#74788D]">Package Name</label>
            <input
              type="text"
              placeholder="Enter package name"
              className="border p-3 rounded-lg w-full"
              value={packageName}
              onChange={(e) => dispatch(setPackageName(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-[#74788D]">Course Type</label>
            <select
              className="border p-3 rounded-lg"
              value={courseType}
              onChange={(e) => dispatch(setCourseType(e.target.value))}
            >
              <option value="IELTS General">IELTS General</option>
              <option value="IELTS Academic">IELTS Academic</option>
            </select>
          </div>
        </div>
        <DndContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ServiceList services={leftServices} />
            <SelectedServices
              services={rightServices}
              onQuantityChange={handleQuantityChange}
            />
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default PackageCreation;



