import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title",          type: "string"   }),
    defineField({ name: "slug",           type: "slug",    options: { source: "title" } }),
    defineField({ name: "description",    type: "string"   }),
    defineField({ name: "customer",       type: "string"   }),
    defineField({ name: "sector",         type: "string"   }),
    defineField({ name: "hub",            type: "string"   }),
    defineField({ name: "h1",             type: "string"   }),
    defineField({ name: "sub",            type: "string"   }),
    defineField({ name: "hero",           type: "image"    }),
    defineField({ name: "challenge",      type: "text"     }),
    defineField({ name: "approach",       type: "text"     }),
    defineField({ name: "results",        type: "array",
      of: [{ type: "object", fields: [
        { name: "metric", type: "string", title: "Metric name" },
        { name: "value",  type: "string", title: "Value (e.g. 748%)" },
        { name: "unit",   type: "string", title: "Unit (e.g. 12 months) — optional" },
      ]}],
    }),
    defineField({ name: "quote",          type: "object", fields: [
      { name: "text",   type: "text",   title: "Quote text"   },
      { name: "author", type: "string", title: "Author name"  },
      { name: "role",   type: "string", title: "Author role"  },
    ]}),
    defineField({ name: "relatedProduct", type: "string"   }),
    defineField({ name: "publishedAt",    type: "datetime" }),
  ],
});
