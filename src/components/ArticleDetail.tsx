"use client";
import React from "react";
import Image from "next/image";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData;
}

const ArticleDetail: React.FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category + Date */}
      <p className="text-sm mb-2"style={{ color: '#838383' }}>
        <span className="font-semibold">{data.category}</span> • {data.date}
      </p>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-4">
        {data.title}
      </h1>

      {/* Short Description */}
      <p className="text-lg mb-6"style={{ color: '#838383' }}>{data.shortdescription}</p>

      {/* Article Image */}
      <div className="w-full aspect-video relative overflow-hidden shadow-md">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default ArticleDetail;
