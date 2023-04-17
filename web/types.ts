export type Project = {
  _id: string;
  _type: "project";
  title: string;
  description: BlockContent;
  slug: Slug;
  mainImage: Image;
  images: ProjectImage[];
};

export type ProjectImage = {
  _id: string;
  _type: "projectImage";
  image: Image;
  caption: string;
};

export type Slug = {
  _type: "slug";
  current: string;
};

export type Image = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  crop: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
};

export type BlockContent = any;
