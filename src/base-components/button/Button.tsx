// components/Button.tsx
import React from "react";

interface ButtonProps {
  text?: string;
  message?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "button",
  message = "this is massage alert",
}) => {
  const handleClick = (e: React.MouseEvent) => {
    alert(message);
  };
  return (
    <button className="border p-1" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
