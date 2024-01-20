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
      <div className="md:grid grid-cols-[1fr_3fr] relative min-h-screen font-body">
        <div className="w-full block mb-64 border-r h-full p-64 md:py-96 relative text-justify">
          <div className="sticky top-64">
            <h1 className="text-64 font-[300]">{title}</h1>
            <PortableText
              blocks={description}
              className="max-w-3xl text-14 text-gray-600"
            />
            <div className="mt-24">
              <TextLink href="/" icon="leftArrow" leading>
                CV
              </TextLink>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-32 p-64 md:p-96">
          {projects.map((project) => (
            <Link
              href={"/" + project.slug?.current}
              key={project._id}
              className="w-full flex flex-col h-full group transition-colors duration-700 ease-out"
            >
              <div className="overflow-hidden">
                <Image
                  image={project.mainImage}
                  alt={project.title}
                  className="flex-1 overflow-hidden transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                  aspectRatio={1}
                />
              </div>

              <div className="mt-8">
                <p className="text-32 md:text-16 font-light">{project.title}</p>
                {/* <p>{project.subtitle}</p> */}
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
