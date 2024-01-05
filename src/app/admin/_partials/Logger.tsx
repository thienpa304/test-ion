import React from "react";
import useAdminStore from "../_states";

const Logger = () => {
  const { components, mousePosition } = useAdminStore();
  return (
    <>
      <div>Instances: {components.length}</div>
      <div>
        Mouse: ( {mousePosition.x}, {mousePosition.y})
      </div>
    </>
  );
};

export default Logger;
