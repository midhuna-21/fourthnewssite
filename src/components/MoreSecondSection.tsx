import Image from "next/image";

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData;
}

const MoreSecondSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Image */}
      <div className="relative w-full h-64 md:h-64">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="mt-6"> {/* push text slightly down */}
        {/* Category + Date */}
        <p style={{ color: "#838383" }} className="flex items-center gap-1">
          <span
            className="text-[18px] font-bold"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {data.category}
          </span>
          <span
            className="text-[12px]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {data.date}
          </span>
        </p>

        {/* Title */}
        <p
          className="text-[36px] font-[oswald] leading-[1.1] line-clamp-3"
          style={{ fontWeight: 700 }}
        >
          {data.title}
        </p>
      </div>
    </div>

  );
}

export default MoreSecondSection;