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
  return (
    <main>
      <div>
        {rows.map(({ columns }, i) => (
          <div
            key={i}
            className="md:grid"
            style={{
              gridTemplateColumns: `repeat(${
                columns.length + (i === 0 ? 1 : 0)
              }, 1fr)`,
            }}
          >
            {i === 0 && (
              <div className="p-24 w-full block [&+&]:border-l border-b">
                <h1 className="text-[128px] font-[300]">{title}</h1>
                <PortableText blocks={description} />
                <div className="mt-24">
                  <TextLink href="/" icon="rightArrow">
                    Se min CV
                  </TextLink>
                </div>
              </div>
            )}
            {columns.map((project) => (
              <Link
                href={"/" + project.slug?.current}
                key={project._id}
                className="p-24 w-full flex flex-col h-full [&+&]:border-l border-b group transition-colors duration-700 ease-out"
              >
                <Image
                  image={project.mainImage}
                  alt={project.title}
                  className="flex-1 overflow-hidden transition-all duration-[2s] group-hover:grayscale"
                  aspectRatio={1}
                />

                <div className="mt-16">
                  <h1>{project.title}</h1>
                  <p>{project.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
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
