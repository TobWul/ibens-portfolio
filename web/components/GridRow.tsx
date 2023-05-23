import * as React from "react";

interface RowProps {
  children: React.ReactNode;
}

export const GridRow: React.FC<RowProps> = ({ children }) => {
  return (
    <div
      className="border-b border-black grid"
      //@ts-ignore
      style={{ gridTemplateColumns: `repeat(${children.length}, 1fr)` }}
    >
      {children}
    </div>
  );
};
