export type SourceLink = {
  title: string;
  url: string;
  coverImageUrl?: string;
};

export type ArticleImage = {
  src: string;
  alt?: string;
};

export type ArticleSection = {
  id: string;
  title: string;
  summary: string;
  content: string;

  type?: "info" | "warning";

  images?: ArticleImage[];
  sources: SourceLink[];
  tags: string[];
};
