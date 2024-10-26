import { CollectionConfig } from "payload/types";

export const PortfolioProjects: CollectionConfig = {
  slug: "portoflio-projects",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "projectName",
      type: "text",
      label: "Project Name",
      required: true,
    },
    {
      name: "projectLink",
      type: "text",
      label: "Project Link",
      required: true,
    },
    {
      name: "projectDescription",
      type: "text",
      label: "Project Description",
      required: true,
    },
    {
      name: "projectSummary",
      type: "text",
      label: "Project Summary",
      required: true,
    },
    {
      name: "projectImages",
      type: "array",
      label: "Project Images",
      minRows: 4,
      maxRows: 5,
      required: true,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "caption",
          type: "text",
        },
      ],
    },
    {
      name: "roles",
      type: "array",
      label: "Project Roles",
      required: true,
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "text",
        },
        {
          name: "name",
          type: "text",
        },
      ],
    },
    {
      name: "problemStatment",
      type: "text",
      label: "Problem Statement",
      required: true,
    },
    {
      name: "solution",
      type: "text",
      label: "Solution",
      required: true,
    },
    {
      name: "lessonsLearned",
      type: "text",
      label: "Lessons Learned",
      required: true,
    },
  ],
};
