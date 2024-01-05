"use client";
import { getComponentsStorage } from "@/app/admin/_states";
import {
  BASE_COMPONENTS,
  BaseComponentData,
} from "@/constants/base-components";
import React from "react";

const Consumer = () => {
  const components = getComponentsStorage() || [];
  const renderComponent = (component: BaseComponentData) => {
    console.log(component, "component");
    const element = BASE_COMPONENTS.find(
      (item) => item.type === component.type
    );
    if (element?.component) return <element.component {...component.config} />;
    else return <div></div>;
  };
  return (
    <div className="w-full flex justify-center p-2">
      {components.map((component, index) => (
        <div key={index}>{renderComponent(component)}</div>
      ))}
    </div>
  );
};

export default Consumer;
