import React, { PropsWithChildren } from "react";
import "./FloatingButton.css";

interface FloatingButtonProps {
  onClick: () => void;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

const FloatingButton: React.FC<PropsWithChildren<FloatingButtonProps>> = ({ onClick, position = "bottom-right", children }) => {
  return (
    <button className={`floating-button ${position}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default FloatingButton;