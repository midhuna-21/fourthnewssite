import React from "react";

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

const NewsHeadline: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {/* Date + Dot */}
      <div className="flex items-center">
        <span className="text-xs sm:text-sm text-gray-500">{data.date}</span>
        <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
      </div>

      {/* Headline */}
      <h2 className="text-[24px] font-[oswald] text-gray-900" style={{fontWeight:700}}>
        {data.title}
      </h2>
    </div>
  );
};

export default NewsHeadline;
