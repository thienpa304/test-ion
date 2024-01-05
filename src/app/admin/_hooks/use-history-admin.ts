import { BaseComponentData } from "@/constants/base-components";
import { useEffect, useState } from "react";
import useAdminStore from "../_states";

const useHistoryAdmin = () => {
  const { components, setComponents, setActiveComponent } = useAdminStore();
  const [preComponent, setPreComponent] = useState<BaseComponentData[]>([]);
  const [history, setHistory] = useState<BaseComponentData[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isRestore, setIsRestore] = useState(false);
  console.log(history, "history");

  useEffect(() => {
    // check restore components
    if (isRestore) {
      setIsRestore(false);
    } else {
      // check components update config
      if (preComponent.length === components.length) return;
      setHistory([...history.slice(0, historyIndex + 1), components]);
      setPreComponent(components);
      setHistoryIndex(historyIndex + 1);
    }
  }, [components]);
  const undo = () => {
    if (historyIndex > 1) {
      setIsRestore(true);
      setActiveComponent(null);
      setComponents(history[historyIndex - 2]);
      setHistoryIndex(historyIndex - 1);
    }
  };
  const redo = () => {
    if (historyIndex < history.length) {
      setIsRestore(true);
      setActiveComponent(null);
      setComponents(history[historyIndex]);
      setHistoryIndex(historyIndex + 1);
    }
  };
  return { undo, redo };
};

export default useHistoryAdmin;
