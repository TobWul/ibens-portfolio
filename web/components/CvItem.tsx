import { CVItem } from "@/types";
import classNames from "classnames";
import Link from "next/link";
import * as React from "react";

interface CvItemProps extends CVItem {}

export const CvItem: React.FC<CvItemProps> = ({
  title,
  portfolioItem,
  startYear,
  endYear,
  description,
}) => {
  const styling = "border-b last-of-type:border-none p-24";
  const Content = () => (
    <>
      <p className="text-24">
        {startYear} {endYear && " – " + endYear}
      </p>
      <h3 className="text-32">{title}</h3>
      <p className="text-18">{description}</p>
    </>
  );
  return portfolioItem ? (
    <li
      key={title}
      className={classNames(styling, "block hover:no-underline underline")}
    >
      <Link href={"/" + portfolioItem?.slug?.current}>
        <Content />
      </Link>
    </li>
  ) : (
    <li key={title} className={classNames(styling)}>
      <Content />
    </li>
  );
};
