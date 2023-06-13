import * as React from "react";
import { default as NextLink } from "next/link";
import { Icon, IconType } from "./Icons";
import classNames from "classnames";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  icon?: IconType;
  leading?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href = "",
  children,
  icon,
  leading,
}) => {
  return (
    <NextLink
      href={href}
      className={classNames(
        "flex items-center gap-8 underline hover:no-underline w-fit",
        {}
      )}
    >
      {icon && leading && <Icon icon={icon} size={16} />}
      {children}
      {icon && !leading && <Icon icon={icon} size={16} />}
    </NextLink>
  );
};
