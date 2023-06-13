import { ProjectImage as ProjectImageType } from "@/types";
import * as React from "react";
import { Image } from "./Image";
import classNames from "classnames";

type ProjectImageProps = { alt?: string } & ProjectImageType;

export const ProjectImage: React.FC<ProjectImageProps> = ({
  image,
  secondImage,
  gridRatio,
  title,
  caption,
  actualCaption,
  youtube,
  alt,
}) => {
  const singleImage = !secondImage && !caption;
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div
      className="border-b relative md:grid gap-24 px-24 [&_img]:w-full [&_img]:h-full [&_div]:w-full [&_div]:max-h-screen"
      style={{
        gridTemplateColumns:
          singleImage || !gridRatio
            ? "1fr"
            : `${gridRatio}fr ${12 - gridRatio}fr`,
      }}
    >
      {children}
    </div>
  );
  if (youtube) {
    return (
      <Wrapper>
        <div className="h-full w-full py-24">
          <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={youtube}
              title={caption || alt || ""}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div
        className={classNames("h-full w-full py-24", {
          "md:border-r md:pr-24": !singleImage,
        })}
      >
        <div className="relative w-full h-full">
          <Image
            image={image}
            alt={caption || alt || ""}
            className="h-full w-full "
            background
          />
          {actualCaption && (
            <p className="absolute bottom-16 left-16 text-14 text-gray-800">
              {actualCaption}
            </p>
          )}
        </div>
      </div>
      {secondImage && (
        <div className="h-full py-24">
          <Image
            image={secondImage}
            alt={caption || alt || ""}
            className={classNames({
              "h-full": !caption,
            })}
            background
          />
        </div>
      )}
      {caption && !secondImage && (
        <div className="py-24 h-full">
          <div className="sticky top-24 h-fit">
            {title && <h3 className="font-bold text-18">{title}</h3>}
            <p className="whitespace-pre-wrap">{caption}</p>
          </div>
        </div>
      )}
    </Wrapper>
  );
};
