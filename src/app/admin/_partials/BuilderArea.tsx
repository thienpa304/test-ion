import { BaseComponentData } from "@/constants/base-components";
import { useDrop } from "react-dnd";
import useAdminStore from "../_states";
const BuilderArea = () => {
  const { components, setComponents, setActiveComponents } = useAdminStore();
  const [, drop] = useDrop({
    accept: ["component"],
    drop: (item: BaseComponentData) => {
      handleDrop(item);
    },
  });
  const handleDrop = (item: BaseComponentData) => {
    setComponents((prev) => [...prev, item]);
  };

  const handleRemoveComponent = (index: number) => {
    setComponents((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  };
  const handleActiveComponent =
    (idx: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      setActiveComponents(idx);
    };
  const renderComponents = () => {
    return components.map((component, index) => (
      <div
        key={index}
        className="m-2 cursor-pointer"
        onClick={handleActiveComponent(index)}
      >
        <div style={{ pointerEvents: "none" }}>
          <component.component {...component.config} />
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full h-full" ref={drop}>
      {renderComponents()}
    </div>
  );
};

export default BuilderArea;
