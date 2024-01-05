import React from "react";
import DraggableItem from "./DraggableItem";
import { BASE_COMPONENTS } from "@/constants/base-components";

const AvailableComponents = () => {
  return (
    <div className="flex flex-col gap-2 items-center pt-2">
      {BASE_COMPONENTS.map((item) => (
        <div key={item.type}>
          <DraggableItem type={"component"} data={item} />
          <div className="text-center">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default AvailableComponents;
