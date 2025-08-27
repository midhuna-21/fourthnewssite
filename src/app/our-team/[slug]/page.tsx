import React from "react";
import authors from "../../../../public/data/author.json";

interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string[];
  email: string;
}

export async function generateStaticParams() {
  return authors.map((author: Author) => ({
    slug: author.slug,
  }));
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author: Author | undefined = authors.find((a) => a.slug === slug);

  if (!author) {
    return <div className="text-center py-20 text-gray-700">Author not found</div>;
  }

  return (
    <div className=" max-w-4xl mx-auto px-6 py-16">
      
      {/* Back link */}
      <div className="mb-6">
        <a
          href="/our-team"
          className="text-blue-600 hover:underline text-sm cursor-pointer"
        >
          &larr; Back to Our Team
        </a>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center mb-8 border-b pb-6 gap-6">
        
        <div>
          <h1 className="text-3xl font-bold ">{author.name}</h1>
          <p className="text-gray-600 mt-1">{author.role}</p>
        </div>
      </div>

      {/* Bio */}
      <section className="mb-12 space-y-4 text-gray-500 leading-relaxed text-lg">
        {author.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

    
      {/* Contact */}
      <section className="border-t pt-6 text-gray-500">
        <p className="text-sm">
          <span className="font-medium">Want to get in touch or share a tip?</span>
          <br />
          Email:{" "}
          <a
            href={`mailto:${author.email}`}
            className="text-blue-600 hover:underline"
          >
            {author.email}
          </a>
        </p>
      </section>
    </div>
  );
}
