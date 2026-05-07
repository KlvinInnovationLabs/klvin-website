import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title",          type: "string",   title: "Title (keep under 55 chars)" }),
    defineField({ name: "slug",           type: "slug",     title: "Slug", options: { source: "title" } }),
    defineField({ name: "description",    type: "string",   title: "Meta Description (keep under 160 chars)" }),
    defineField({ name: "publishedAt",    type: "datetime", title: "Published At" }),
    defineField({ name: "author",         type: "string",   title: "Author" }),
    defineField({ name: "hero",           type: "image",    title: "Hero Image" }),
    defineField({ name: "body",           type: "array",    title: "Body",
      of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "faqs",           type: "array",    title: "FAQs",
      of: [{ type: "object", fields: [
        { name: "q", type: "string", title: "Question" },
        { name: "a", type: "text",   title: "Answer"   },
      ]}],
    }),
    defineField({ name: "relatedProduct", type: "string",   title: "Related Product Slug (e.g. sam-v3)" }),
    defineField({ name: "keywords",       type: "array",    title: "Keywords", of: [{ type: "string" }] }),
  ],
});
