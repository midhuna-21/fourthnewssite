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

const TopNewsCard: React.FC<Props> = ({ data }) => {
  return (
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="block w-full"
        style={{ color: "inherit" }}
      >
    <div className="w-full lg:max-w-sm">
      {/* Image */}
      <div className="relative overflow-hidden group">
      <Image
        src={data.image}
        alt={data.title}
        width={800}
        height={400}
        className="w-full h-[220px] sm:h-[260px] lg:h-[160px] object-cover
            transition-transform duration-700 ease-in-out 
            group-hover:scale-105
          "
                />
             
                <div
                  className="
            absolute inset-0 bg-black/0 
            group-hover:bg-black/10 
            transition-colors duration-500 ease-in-out
          "
                />
              </div>

      {/* Text Content */}
      <div className="mt-2 lg:px-0">
        <p className="text-gray-500">
          <span
            className="text-[14px] font-bold capitalize"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {data.category}
          </span>{" "}
          <span
            className="ml-1 text-[12px] lg:text-[11px]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {data.date}
          </span>
        </p>

        <h3
          className="font-[oswald] font-bold leading-tight mt-1
                     text-[20px] sm:text-[22px] lg:text-[24px]"
        >
          {data.title}
        </h3>
      </div>
    </div>
      </Link>
  );
};

export default TopNewsCard;
