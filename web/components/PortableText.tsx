import * as React from "react";
import { PortableText as SanityPortableText } from "@portabletext/react";
import { BlockContent } from "@/types";

interface BlockContentProps {
  blocks: BlockContent;
  className?: string;
}

export const PortableText: React.FC<BlockContentProps> = ({
  blocks,
  className,
}) => {
  return (
    <div className={className + " [&>*+*]:mt-[1em]"}>
      <SanityPortableText value={blocks} components={{}} />
    </div>
  );
};
