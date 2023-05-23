import * as React from "react";

interface GridColumnProps {
  children: React.ReactNode;
}

export const GridColumn: React.FC<GridColumnProps> = ({ children }) => {
  return (
    <div className="column [&+.column]:border-l border-black md:p-48 p-24">
      {children}
    </div>
  );
};
