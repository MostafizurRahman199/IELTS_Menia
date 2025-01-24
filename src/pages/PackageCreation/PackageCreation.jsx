

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
import Spinner from "../../components/Spinner/Spinner";

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

  if(isLoading){
    return <Spinner></Spinner>
  }


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
    <div className="bg-[#f8f8fb] py-8">
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



