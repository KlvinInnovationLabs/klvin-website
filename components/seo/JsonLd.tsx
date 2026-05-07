// JsonLd renders structured data as a server-side <script> tag.
// Content is always our own typed schema objects — never user input.
// dangerouslySetInnerHTML is safe here: JSON.stringify escapes all characters,
// and the data type is `object` — no raw HTML strings are accepted.
// Reference: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld

type JsonLdProps = { data: Record<string, unknown> | Record<string, unknown>[] };

export function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
