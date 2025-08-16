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
      <div className="absolute inset-0 flex flex-col justify-end px-3 py-4 sm:px-4 sm:py-6 md:px-8 md:py-8 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        {/* Category and date */}
        <p className="text-white text-xs sm:text-sm md:text-base font-medium">
          <span className="font-semibold">{data.category}</span>{" "}
          <span className="opacity-80 text-xs">{data.date}</span>
        </p>

        {/* Title */}
        <h1
          className="text-white font-[oswald] text-lg sm:text-xl md:text-[36px] leading-tight"
          style={{ fontWeight: 700 }}
        >
          {data.title}
        </h1>

        {/* Short description */}
        <p className="text-xs sm:text-sm md:text-base mt-2 max-w-2xl" style={{color:'#B0B0B0'}}>
          {data.shortdescription}
        </p>
      </div>
    </div>
  );
};

export default LifestyleCard;
