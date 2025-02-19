import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "xglwe1ab",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});