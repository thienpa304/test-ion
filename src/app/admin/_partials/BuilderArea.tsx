import {
  BASE_COMPONENTS,
  BaseComponentData,
} from "@/constants/base-components";
import { useDrop } from "react-dnd";
import useAdminStore from "../_states";
const BuilderArea = () => {
  const { components, setComponents, setActiveComponent } = useAdminStore();
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
      setActiveComponent(idx);
    };
  const renderComponent = (component: BaseComponentData, index: number) => {
    const element = BASE_COMPONENTS.find(
      (item) => item.type === component.type
    );
    if (!element) return <></>;

    return (
      <div
        key={index}
        className="m-2 cursor-pointer"
        onClick={handleActiveComponent(index)}
      >
        <div style={{ pointerEvents: "none" }}>
          <element.component {...component.config} />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full" ref={drop}>
      {components.map(renderComponent)}
    </div>
  );
};

export default BuilderArea;
