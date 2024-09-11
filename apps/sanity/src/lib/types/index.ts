import { type Image } from "sanity";

export interface PagePayload {
  title?: string;
  slug: string;
  sectionsBody?: any[];

  seoTitle?: string;
  seoDescription?: string;
  ogImage?: Image;
  robots?: string;
}
