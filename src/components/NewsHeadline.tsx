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
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
        <span className="text-[11px]" style={{color:'#838383',fontFamily:'Roboto, sans-serif'}}>{data.date}</span>
      </div>

      {/* Headline */}
      <h2 className="text-[24px] font-[oswald]" style={{fontWeight:700}}>
        {data.title}
      </h2>
    </div>
  );
};

export default NewsHeadline;
