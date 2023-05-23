import classNames from "classnames";
import * as React from "react";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <div className={classNames("max-w-screen-xl mx-auto p-24", className)}>
      {children}
    </div>
  );
};
