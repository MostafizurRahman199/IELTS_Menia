import React from "react";
import { useDroppable } from "@dnd-kit/core";

const DroppableArea = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  const style = {
    backgroundColor: isOver ? "#f0f9ff" : "white",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="p-4 rounded-lg bg-gray-50 h-[20rem]"
    >
      {children}
    </div>
  );
};

export default DroppableArea;
