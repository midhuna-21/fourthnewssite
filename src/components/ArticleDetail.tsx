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
    <div className="container mx-auto px-4">
      {/* Category + Date */}
      <p className="text-sm mb-2" style={{ color: '#454545' }}>
        <span className="font-semibold text-[18px]">{data.category}
        </span> • {data.date}
      </p>

      {/* Title */}
      <h1
        className="text-[56px] leading-[1.1] font-[oswald] mb-4"
        style={{ fontWeight: 700 }}
      >
        {data.title}
      </h1>


      {/* Short Description */}
      <p className="text-[19px] mb-6" style={{ color: '#DDDDD', fontWeight: 400 }}>{data.shortdescription}</p>

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
