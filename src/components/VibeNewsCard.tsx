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
       <p>
            <span className="text-[14px]" style={{fontWeight:700,fontFamily:'Roboto, sans-serif'}}>{data.category}</span>{" "}
            <span className="ml-1 text-[11px]"style={{fontFamily:'Roboto, sans-serif'}}>{data.date}</span>
          </p>
        {/* Bottom Headline */}
        <div className="mt-auto">
        
            <p className="text-[24px] leading-tight font-[oswald]" style={{fontWeight:700}}>
              {data.title}
            </p>
         
        </div>
      </div>
    </div>
  );
};

export default VibeNewsCard;
