import React, { useEffect } from "react";
import useAdminStore, { saveComponentsStorage } from "../_states";

const useComponentsStorage = () => {
  const { components } = useAdminStore();
  useEffect(() => {
    saveComponentsStorage(components);
  }, [components]);
};

export default useComponentsStorage;
