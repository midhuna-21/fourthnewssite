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

const HorizontalNewsCard: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.slug}
      className="block w-full"
      style={{ color: "inherit" }}
    >
      <div className="flex w-full lg:max-w-md">
        {/* Image */}

        <div className="flex-shrink-0 relative w-[95px] sm:w-[105px] aspect-[105/95] overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out" />
        </div>


        {/* Text */}
        <div className="ml-3 flex flex-col justify-center">
          <p>
            <span
              className="text-[14px] capitalize text-gray-500"
              style={{
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              {data.category}
            </span>{" "}
            <span
              className="ml-1 text-[11px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "#4B5563",
              }}
            >
              {data.date}
            </span>
          </p>

          <h3
            className="mt-1 font-['Oswald'] font-bold 
                     text-[15px] sm:text-[16px] md:text-[17px] 
                     leading-tight line-clamp-2"
          >
            {data.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalNewsCard;
