import { CollectionConfig } from "payload/types";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  fields: [
    {
      name: "businessOwnerName",
      type: "text",
      required: true,
    },
    {
      name: "businessName",
      type: "text",
      required: true,
    },
    {
      name: "quote",
      type: "textarea",
      required: true,
    },
    {
      name: "businessLink",
      type: "text",
    },
  ],
  upload: true,
};
