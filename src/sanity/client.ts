import { createClient } from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "xglwe1ab",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export const urlFor = (source: SanityImageSource) => imageUrlBuilder({projectId: "xglwe1ab", dataset: "production"}).image(source);