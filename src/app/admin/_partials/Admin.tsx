"use client";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MenuBar from "./MenuBar";
import AvailableComponents from "./AvailableComponents";
import BuilderArea from "./BuilderArea";
import FormComponent from "./FormComponent";
import Logger from "./Logger";
import useAdminStore from "../_states";
import useComponentsStorage from "../_hooks/use-componets-storage";

const Admin: React.FC = () => {
  const { setMousePosition } = useAdminStore();
  // save components to localStorage when components change
  useComponentsStorage()
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen w-full inline-flex flex-col">
        <div className="border-b-2 h-10 w-full ">
          <MenuBar />
        </div>
        <div className="h-full items-center inline-flex">
          <div className="w-60 h-full border-r-2">
            <AvailableComponents />
          </div>
          <div className="h-full w-full inline-flex flex-col">
            <div
              onMouseMove={handleMouseMove}
              className="h-full w-full border-b-2 inline-flex"
            >
              <div className="w-60 border-r-2">
                <Logger />
              </div>
              <BuilderArea />
            </div>
            <div className="h-60 w-full">
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Admin;
