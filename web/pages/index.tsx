import { client } from "@/client";
import { Cv } from "@/components/Cv";
import { GridRow } from "@/components/GridRow";
import { ProjectList } from "@/components/ProjectList";
import { ProjectThumbnail } from "@/components/ProjectThumbnail";
import { CV, Project } from "@/types";
import { GetStaticProps } from "next";
import Image from "next/image";

export default function Home({
  projects,
  cv,
}: {
  projects: Project[];
  cv: CV;
}) {
  return (
    <main className="h-full">
      <Cv {...cv} />
      {/* <ProjectList projects={projects} /> */}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await client.fetch(
    `*[_type == "project" && defined(slug.current) ]`
  );
  const cv = await client.fetch(`*[_type == "cv"][0]`);
  return {
    props: {
      projects,
      cv,
    },
  };
};
