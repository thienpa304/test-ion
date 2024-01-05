import { BaseComponentData } from "@/constants/base-components";
import { useDrag } from "react-dnd";
export interface DraggableItemProps {
  children?: React.ReactNode;
  type: string;
  data: BaseComponentData;
  onDrop?: () => void;
}
const DraggableItem: React.FC<DraggableItemProps> = ({
  children,
  type,
  data,
  onDrop,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { ...data },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        if (onDrop) onDrop();
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="w-24 h-24 border flex items-center p-1 cursor-move"
    >
      {children}
    </div>
  );
};

export default DraggableItem;
