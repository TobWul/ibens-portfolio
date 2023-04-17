import { client } from "@/client";
import { Image } from "@/components/Image";
import { PortableText } from "@/components/PortableText";
import { Project } from "@/types";
import { GetStaticProps } from "next";
import * as React from "react";

interface ProjectPageProps extends Project {}

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  description,
  mainImage,
  images,
}) => {
  return (
    <main>
      <header className="text-justify max-w-xl mx-auto py-64">
        <h1 className="text-center mb-24">{title}</h1>
        <PortableText blocks={description} />
      </header>
      <div className="space-y-24 p-24">
        {images.map(({ image, caption }) => (
          <Image image={image} alt={""} />
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;

export const getStaticPaths = async () => {
  const result = await client.fetch(`*[_type == "project"]{slug}`);
  const paths = result.map((project: Project) => ({
    params: { projectSlug: project.slug.current },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const result = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]`,
    {
      slug: context.params?.projectSlug,
    }
  );
  return {
    props: {
      ...result,
    },
  };
};
