import * as React from "react";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { Project } from "@/types";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectThumbnail key={project._id} {...project} />
      ))}
    </>
  );
};
