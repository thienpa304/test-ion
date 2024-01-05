import React, { useRef } from "react";
import useAdminStore, { saveComponentsStorage } from "../_states";
import useHistoryAdmin from "../_hooks/use-history-admin";
import { downloadJSON } from "@/utils/json-file";
import { BaseComponentData } from "@/constants/base-components";

const MenuBar = () => {
  const { components, setComponents } = useAdminStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { redo, undo } = useHistoryAdmin();
  const menus = [
    {
      name: "Save",
      onClick: () => {
        saveComponentsStorage(components);
      },
    },
    {
      name: "Undo",
      onClick: () => undo(),
    },
    {
      name: "Redo",
      onClick: () => redo(),
    },
    {
      name: "Export",
      onClick: () => downloadJSON(components),
    },
    {
      name: "Import",
      onClick: () => {
        fileInputRef.current?.click();
      },
    },
    {
      name: "View",
      onClick: () => {
        const newPath = "/consumer";
        const newTab = window.open(newPath, "_blank");
        if (newTab) {
          newTab.focus();
        }
      },
    },
  ];
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonData = JSON.parse(
          e.target?.result as string
        ) as BaseComponentData[];
        setComponents(jsonData);
      };
      reader.readAsText(file);
    }
  };
  const renderMenu = (item: any) => {
    return (
      <div
        className="py-1 px-2 bg-red-400 text-white cursor-pointer"
        onClick={item.onClick}
      >
        {item.name}
      </div>
    );
  };
  return (
    <div className="flex justify-center gap-1">
      {menus.map((menu) => renderMenu(menu))}
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }} // Hide the actual file input
      />
    </div>
  );
};

export default MenuBar;
