import { BaseComponentData } from "@/constants/base-components";
import { create } from "zustand";

interface MousePosition {
  x: number;
  y: number;
}
interface AdminStore {
  mousePosition: MousePosition;
  components: BaseComponentData[];
  activeComponent: number | null;
  setMousePosition: (mousePosition: MousePosition) => void;
  setActiveComponents: (index: number) => void;
  setComponents: (
    components:
      | BaseComponentData[]
      | ((prevValue: BaseComponentData[]) => BaseComponentData[])
  ) => void;
}

const useAdminStore = create<AdminStore>((set) => ({
  mousePosition: { x: 0, y: 0 },
  components: [],
  activeComponent: null,
  setMousePosition: (mousePosition) => {
    set(() => ({ mousePosition }));
  },
  setActiveComponents: (index) => {
    set(() => ({ activeComponent: index }));
  },
  setComponents: (components) =>
    set((prevState) => ({
      ...prevState,
      components:
        typeof components === "function"
          ? (
              components as (
                prevData: BaseComponentData[]
              ) => BaseComponentData[]
            )(prevState.components)
          : components,
    })),
}));

export const saveComponentsStorage = (components: BaseComponentData[]) => {
  try {
    const serializedComponent = JSON.stringify(components);
    localStorage.setItem("components", serializedComponent);
  } catch (error) {
    console.error("Error saving component to localStorage:", error);
  }
};

export const getComponentsStorage = (): BaseComponentData[] | null => {
  try {
    const serializedComponent = localStorage.getItem("components");
    if (serializedComponent) {
      return JSON.parse(serializedComponent);
    }
    return null;
  } catch (error) {
    console.error("Error getting component from localStorage:", error);
    return null;
  }
};
export default useAdminStore;
