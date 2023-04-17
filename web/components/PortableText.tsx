import * as React from "react";
import { PortableText as SanityPortableText } from "@portabletext/react";
import { BlockContent } from "@/types";

interface BlockContentProps {
  blocks: BlockContent;
}

export const PortableText: React.FC<BlockContentProps> = ({ blocks }) => {
  return <SanityPortableText value={blocks} components={{}} />;
};
