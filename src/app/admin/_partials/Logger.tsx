import React from "react";
import useAdminStore from "../_states";

const Logger = () => {
  const { components, mousePosition } = useAdminStore();
  return (
    <>
      <div>Instances: {components.length}</div>
      <div>
        Mouse: ({Math.round(mousePosition.x)}, {Math.round(mousePosition.y)})
      </div>
    </>
  );
};

export default Logger;
