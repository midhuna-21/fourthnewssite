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

const VibeNewsCard: React.FC<Props> = ({data}) => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <img
        src={data.image}
        alt="VibeNews"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 text-white">
        {/* Top Label */}
        <span className="font-bold text-sm">{data.category}</span>

        {/* Bottom Headline */}
        <div className="mt-auto">
        
            <p className="font-bold text-2xl leading-tight">
              {data.title}
            </p>
         
        </div>
      </div>
    </div>
  );
};

export default VibeNewsCard;
