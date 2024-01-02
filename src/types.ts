export interface ContentEntry {
  link: string,
  name: string;
  desc: string;
  skills: Array<string>;
}

export interface ImageContentEntry extends ContentEntry {
  image: string;
}

export interface ComponentDelay {
  mainDelay?: number;
}

