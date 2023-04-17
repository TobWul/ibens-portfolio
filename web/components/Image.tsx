import * as React from "react";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/client";
import classNames from "classnames";
import { Image as ImageType } from "@/types";

interface ImageProps {
  image: ImageType;
  alt: string;
  className?: string;
  aspectRatio?: number;
  sizes?: string;
  loading?: "lazy" | "eager";
}

export const Image: React.FC<ImageProps> = ({
  image,
  alt,
  className,
  aspectRatio,
  loading,
  sizes = "(max-width: 800px) 100vw, 800px",
}) => {
  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: (imageUrlBuilder, options) => {
      const builder: any = imageUrlBuilder
        .width(
          options.width || Math.min(options.originalImageDimensions.width, 1920)
        )
        .quality(options.quality || 75)
        .fit("clip")
        .auto("format");

      return aspectRatio
        ? builder.height(
            (options.width ||
              Math.min(options.originalImageDimensions.width, 1920)) *
              aspectRatio
          )
        : builder;
    },
  });

  if (!image) return null;

  return (
    <Img
      className={classNames(["select-none", className])}
      alt={alt}
      {...imageProps}
      sizes={sizes}
      loading={loading}
      width={imageProps.width}
      priority={loading === "eager"}
    />
  );
};
