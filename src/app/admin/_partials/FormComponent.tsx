import React from "react";
import useAdminStore from "../_states";
import { BASE_COMPONENTS } from "@/constants/base-components";

const FormComponent = () => {
  const { activeComponent, components, setComponents } = useAdminStore();
  if (activeComponent === null) return <></>;
  const component = components[activeComponent];
  const element = BASE_COMPONENTS.find((item) => item.type === component.type);
  if (!element) return <></>;
  const handleChangeComponent = (data: { [key: string]: any }) => {
    const newComponents = [...components];
    newComponents[activeComponent].config = data;
    setComponents(newComponents);
  };
  return (
    <div className="p-2">
      <element.form onChange={handleChangeComponent} />
    </div>
  );
};

export default FormComponent;
