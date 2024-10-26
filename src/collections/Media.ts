import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "media",
    staticURL: "/media",
    mimeTypes: ["image/jpeg", "image/png"], // Allow only specific formats
  },
  fields: [
    {
      name: "altText",
      type: "text",
      label: "Alt Text",
      required: true,
    },
  ],
};
