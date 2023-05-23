export type CV = {
  _id: string;
  _type: "cv";
  title: string;
  description: BlockContent;
  categories: CVCategory[];
};

export type CVCategory = {
  _id: string;
  _type: "cvCategory";
  title: string;
  items: CVItem[];
};

export type CVItem = {
  _id: string;
  _type: "cvItem";
  title: string;
  description: BlockContent;
  startYear: number;
  endYear: number;
  url: string;
};

export type Project = {
  _id: string;
  _type: "project";
  title: string;
  subtitle: string;
  description: BlockContent;
  slug: Slug;
  mainImage: Image;
  images: ProjectImage[];
};

export type ProjectImage = {
  _id: string;
  _type: "projectImage";
  image: Image;
  secondImage?: Image;
  gridRatio?: number;
  title?: string;
  caption: string;
  youtube?: string;
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
