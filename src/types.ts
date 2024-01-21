export interface ContentEntry {
  link?: string,
  title: string;
  desc: string;
  skills?: Array<string>;
}

export interface ImageContentEntry extends ContentEntry {
  image: string;
}

export interface DateInterval {
  start: string,
  end?: string,
}

export interface DateContentEntry extends ContentEntry {
  DateInterval: DateInterval
}

export interface ComponentDelay {
  mainDelay?: number;
}

