import { client } from "@/client";
import { GridColumn } from "@/components/GridColumn";
import { GridRow } from "@/components/GridRow";
import { Icon } from "@/components/Icons";
import { Image } from "@/components/Image";
import { Layout } from "@/components/Layout";
import { Link } from "@/components/Link";
import { PortableText } from "@/components/PortableText";
import { ProjectImage } from "@/components/ProjectImage";
import { Project } from "@/types";
import { GetStaticProps } from "next";
import * as React from "react";

interface ProjectPageProps extends Project {}

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  subtitle,
  description,
  mainImage,
  images,
}) => {
  return (
    <main className="max-w-6xl mx-auto mt-32">
      <header className="lg:grid grid-cols-2 gap-24 min-h-[70vh]">
        <div className="px-24 lg:pl-0 py-24 order-1">
          <Link href="/portfolio">
            <Icon icon="leftArrow" />
            Tilbake
          </Link>

          <h1 className="mt-24 text-96">{title}</h1>
          <p className="mb-24 text-14 text-gray-500">{subtitle}</p>
          <PortableText blocks={description} className="font-reading" />
        </div>
        <Image
          image={mainImage}
          alt={title}
          className="w-full h-full p-24 max-h-[calc(100vh-24px)]"
        />
      </header>
      {images.map((projectImage) => (
        <ProjectImage key={projectImage._id} alt={title} {...projectImage} />
      ))}
    </main>
  );
};

export default ProjectPage;

export const getStaticPaths = async () => {
  const result = await client.fetch(
    `*[_type == "project" && defined(slug.current)]{slug}`
  );
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
