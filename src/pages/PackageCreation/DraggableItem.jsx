import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { FaBars, FaBookReader, FaHeadphones, FaPen, FaMicrophone } from "react-icons/fa";

const DraggableItem = ({ service, isRightSide, onQuantityChange }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: service._id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  const icons = {
    reading: <FaBookReader />,
    listening: <FaHeadphones />,
    writing: <FaPen />,
    speaking: <FaMicrophone />,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="flex justify-between items-center border p-3 rounded-lg mb-2 bg-white cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <FaBars className="text-gray-400" />
        <span className="text-[#0052CC] border rounded-full p-2 border-[#0052CC]">
          {icons[service.serviceName.toLowerCase()] || <FaBookReader />}
        </span>
        <span>{service.serviceName}</span>
      </div>
      <div className="flex items-center gap-4">
        {isRightSide && (
          <select
            value={service.quantity || 1}
            onChange={(e) => onQuantityChange(service._id, parseInt(e.target.value, 10))}
            className="border rounded p-1"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        )}
        <span className="font-semibold">
          {service.price * (service.quantity || 1)} Tk
        </span>
      </div>
    </div>
  );
};

export default DraggableItem;
