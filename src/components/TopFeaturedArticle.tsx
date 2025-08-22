import Image from "next/image";
import Link from "next/link";

interface NewsData {
    slug: string;
    title: string;
    category: string;
    shortdescription: string;
    description: string;
    image: string;
    date: string;
}

interface Props {
    data: NewsData;
}

const TopFeaturedArticle: React.FC<Props> = ({ data }) => {
    return (
      <Link
  href={`/${data.category}/${data.slug}`}
  title={data.slug}
  className="block w-full"
  style={{ color: "inherit" }}
>
  <div className="flex flex-col md:flex-row md:border-b border-[#615e5e54] max-w-6xl mx-auto h-auto">
    
    {/* Right Image on mobile first, left on desktop */}
    <div className="w-full md:w-6/12 order-first md:order-last">
      <Image
        src={data.image}
        alt={data.title}
        width={900}
        height={700}
        className="w-full h-70 sm:h-64 md:h-full object-cover"
      />
    </div>

    {/* Left Text Content */}
    <div className="w-full md:w-6/12 flex flex-col justify-center pr-0 md:pr-4 md:py-4 py-2">
      <p className="text-gray-500">
        <span
          className="text-sm md:text-lg capitalize"
          style={{ fontWeight: 700, fontFamily: "Roboto, sans-serif" }}
        >
          {data.category}
        </span>{" "}
        <span
          className="ml-1 text-xs md:text-sm"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {data.date}
        </span>
      </p>

      {/* Responsive Title */}
      <p
        className="font-[oswald] text-xl md:text-3xl lg:text-[36px] leading-tight line-clamp-3"
        style={{ fontWeight: 700 }}
      >
        {data.title}
      </p>

      {/* Responsive Description */}
      <p
        className="mt-2 text-sm text-gray-500 md:text-base leading-tight line-clamp-3"
        style={{ fontWeight: 400 }}
      >
        {data.shortdescription}
      </p>
    </div>
  </div>
</Link>

    );
};

export default TopFeaturedArticle;
