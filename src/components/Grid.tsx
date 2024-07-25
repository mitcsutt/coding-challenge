import React, { PropsWithChildren } from "react";
import "./Grid.css";

const Grid: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid-container">{children}</div>;
};

export default Grid;
