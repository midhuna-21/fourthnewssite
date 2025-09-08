import Image from "next/image";
import Link from "next/link";

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
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="block w-full"
        style={{ color: "inherit" }}
      >
  <div className="relative w-full h-70 sm:h-64 md:h-96 overflow-hidden group">
  {/* Image with zoom on hover */}
  <Image
    src={data.image}
    alt={data.title}
    fill
    priority
    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 flex flex-col justify-end px-3 py-4 sm:px-4 md:px-8 
                  bg-gradient-to-t from-black/70 via-black/30 to-transparent">
    {/* Category and date */}
    <p className="text-white">
      <span
        className="text-[18px] capitalize"
        style={{ fontWeight: 700, fontFamily: "Roboto, sans-serif" }}
      >
        {data.category}
      </span>{" "}
      <span
        className="ml-1 text-[12px]"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        {data.date}
      </span>
    </p>

    {/* Title */}
    <h3
      className="text-white font-[oswald] text-lg sm:text-xl md:text-[36px] leading-tight line-clamp-2"
      style={{ fontWeight: 700 }}
    >
      {data.title}
    </h3>

    {/* Short description */}
    <p
      className="text-sm sm:text-sm md:text-base mt-2 max-w-2xl leading-tight line-clamp-3 text-white"
      style={{ fontWeight: 400 }}
    >
      {data.shortdescription}
    </p>
  </div>

  {/* Optional extra hover overlay (slight tint on hover) */}
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out" />
</div>

      </Link>
  );
};

export default LifestyleCard;
