import React from "react";
import DraggableItem from "./DraggableItem";
import DroppableArea from "./DroppableArea";

const ServiceList = ({ services }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-semibold m-4 text-start">List of the Service</h2>
      <DroppableArea id="services">
        {services.map((service) => (
          <DraggableItem key={service._id} service={service} />
        ))}
      </DroppableArea>
      <div className="mt-6">
        <img
          src="/path/to/packageCreationCard.png"
          alt="Package Creation Illustration"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default ServiceList;
