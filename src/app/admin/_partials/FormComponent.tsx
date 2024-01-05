import React from "react";
import useAdminStore from "../_states";

const FormComponent = () => {
  const { activeComponent, components, setComponents } = useAdminStore();
  if (activeComponent === null) return <></>;
  const component = components[activeComponent];

  const handleChangeComponent = (data: { [key: string]: any }) => {
    const newComponents = [...components];
    newComponents[activeComponent].config = data;
    setComponents(newComponents);
  };
  return (
    <div className="p-2">
      <component.form onChange={handleChangeComponent} />
    </div>
  );
};

export default FormComponent;
