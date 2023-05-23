import { Project } from "@/types";
import Link from "next/link";
import * as React from "react";
import { GridColumn } from "./GridColumn";
import { Image } from "./Image";
import { GridRow } from "./GridRow";

interface ProjectThumbnailProps extends Project {}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  title,
  description,
  mainImage,
  slug,
}) => {
  return (
    <Link href={"/" + slug.current}>
      <GridRow>
        <GridColumn>
          <Image image={mainImage} alt={title} />
        </GridColumn>
        <GridColumn>
          <h1 className="text-3xl">{title}</h1>
        </GridColumn>
      </GridRow>
    </Link>
  );
};
