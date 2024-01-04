"use client"
import Button from "@/base-components/button";
import Paragraph from "@/base-components/paragraph";
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface DraggableItemProps {
  type: string;
  data: string;
  onDrop: () => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  type,
  data,
  onDrop,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { type, data },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onDrop();
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {type === "paragraph" && <Paragraph text={data} />}
      {type === "button" && <Button label={data} onClick={() => {}} />}
    </div>
  );
};

const Admin: React.FC = () => {
  const [components, setComponents] = useState<DraggableItemProps[]>([]);

  const handleDrop = (item: DraggableItemProps) => {
    setComponents((prev) => [...prev, item]);
  };

  const renderComponents = () => {
    return components.map((component, index) => (
      <div key={index} style={{ margin: "10px" }}>
        <DraggableItem
          type={component.type}
          data={component.data}
          onDrop={() => handleRemoveComponent(index)}
        />
      </div>
    ));
  };

  const handleRemoveComponent = (index: number) => {
    setComponents((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Admin Builder</h1>
        <div>
          <h2>Available Components</h2>
          <DraggableItem
            type="paragraph"
            data="Default Text"
            onDrop={() => {}}
          />
          <DraggableItem type="button" data="Click Me" onDrop={() => {}} />
        </div>
        <div>
          <h2>Builder Area</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              border: "1px solid #ccc",
              minHeight: "200px",
            }}
          >
            {renderComponents()}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Admin;
