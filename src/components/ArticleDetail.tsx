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
    <div>
      {/* Category + Date */}
      <p className="mb-2 text-gray-500">
        <span className="font-semibold text-[16px] capitalize sm:text-[18px] md:text-[18px]">{data.category}</span> •{" "}
        <span className="text-[12px] sm:text-[14px] md:text-[14px]">{data.date}</span>
      </p>

      {/* Title */}
      <h1
        className="font-[oswald] font-bold mb-4 text-[28px] sm:text-[40px] md:text-[56px] leading-tight sm:leading-[1.2] md:leading-[1.1]"
      >
        {data.title}
      </h1>

      {/* Short Description */}
      <p className="mb-6 text-[14px] sm:text-[16px] md:text-[19px] text-gray-500 font-normal">
        {data.shortdescription}
      </p>

      {/* Article Image */}
      <div className="w-full relative overflow-hidden shadow-md aspect-[16/9] sm:aspect-[16/9] md:aspect-video">
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
