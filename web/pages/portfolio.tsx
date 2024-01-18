import { client } from "@/client";
import { Image } from "@/components/Image";
import { PortableText } from "@/components/PortableText";
import { BlockContent, Project } from "@/types";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Link as TextLink } from "@/components/Link";

const PortfolioPage = ({
  title,
  description,
  rows,
}: {
  title: string;
  description: BlockContent;
  rows: { columns: Project[] }[];
}) => {
  const projects = rows.map(({ columns }) => columns).flat();

  return (
    <main>
      <div className="p-24 md:p-64">
        <div className="w-full block mb-64">
          <h1 className="text-[128px] font-[300]">{title}</h1>
          <PortableText blocks={description} className="max-w-3xl" />
          <div className="mt-24">
            <TextLink href="/" icon="rightArrow">
              Se min CV
            </TextLink>
          </div>
        </div>
        <div className="md:grid grid-cols-3 gap-32">
          {projects.map((project) => (
            <Link
              href={"/" + project.slug?.current}
              key={project._id}
              className="w-full flex flex-col h-full group transition-colors duration-700 ease-out"
            >
              <Image
                image={project.mainImage}
                alt={project.title}
                className="flex-1 overflow-hidden transition-all duration-[1s] ease-out group-hover:grayscale"
                aspectRatio={1}
              />

              <div className="mt-16">
                <h1>{project.title}</h1>
                <p>{project.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;

export const getStaticProps: GetStaticProps = async () => {
  const portfolio = await client.fetch(`*[_type == 'portfolio']{
    title,
    description,
    rows[]{
      columns[]->{
        ...
      }
    }
  }[0]`);
  return {
    props: {
      ...portfolio,
    },
  };
};
