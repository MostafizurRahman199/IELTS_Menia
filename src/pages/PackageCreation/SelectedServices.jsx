import React from "react";
import DraggableItem from "./DraggableItem";
import DroppableArea from "./DroppableArea";

const SelectedServices = ({ services, onQuantityChange }) => {
  const totalPrice = services.reduce(
    (total, service) => total + service.price * (service.quantity || 1),
    0
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold m-4 text-start">Your Format</h2>
        <DroppableArea id="format">
          {services.length === 0 ? (
            <div className="text-center">
              <img
                src="/path/to/animated.png"
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
          <button className="bg-[#74788d] w-full text-white px-4 py-3 rounded-lg">
            Create Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedServices;
