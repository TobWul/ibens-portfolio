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
  externalLink,
}) => {
  const styling = "group border-b last-of-type:border-none px-48 py-16";

  const Content = ({ hover }: { hover?: boolean }) => (
    <>
      <p className="text-16">
        {startYear} {endYear && " – " + endYear}
      </p>
      <h3
        className={classNames("text-24", {
          "underline group-hover:no-underline": hover,
        })}
      >
        {title}
      </h3>
      <p className="text-16 max-w-2xl">{description}</p>
    </>
  );

  return portfolioItem ? (
    <li key={title} className={classNames(styling, "block")}>
      <Link href={"/" + portfolioItem?.slug?.current}>
        <Content hover />
      </Link>
    </li>
  ) : externalLink ? (
    <li key={title}>
      <a
        className={classNames(styling, "block")}
        href={externalLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Content hover />
      </a>
    </li>
  ) : (
    <li key={title} className={classNames(styling)}>
      <Content />
    </li>
  );
};
