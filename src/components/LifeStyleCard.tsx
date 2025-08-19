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

const LifestyleCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative w-full h-56 sm:h-64 md:h-96">
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-end px-3 py-4 sm:px-4 md:px-8  bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        {/* Category and date */}
       <p>
            <span className="text-[18px]" style={{fontWeight:700,fontFamily:'Roboto, sans-serif'}}>{data.category}</span>{" "}
            <span className="ml-1 text-[12px]"style={{fontFamily:'Roboto, sans-serif'}}>{data.date}</span>
          </p>

        {/* Title */}
        <h1
          className="text-white font-[oswald] text-lg sm:text-xl md:text-[36px] leading-tight line-clamp-2"
          style={{ fontWeight: 700 }}
        >
          {data.title}
        </h1>

        {/* Short description */}
        <p className="text-xs sm:text-sm md:text-base mt-2 max-w-2xl leading-tight" style={{color:'#B0B0B0',fontWeight:400}}>
          {data.shortdescription}
        </p>
      </div>
    </div>
  );
};

export default LifestyleCard;
