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

const TopHorizontalCard: React.FC<Props> = ({ data }) => {
  return (
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="block w-full"
        style={{ color: "inherit" }}
      >
    <div className="flex flex-col sm:flex-row w-full">
      {/* Left: Image */}
      <div className="flex-shrink-0 w-full sm:w-[160px]">
        <Image
          src={data.image}
          alt={data.title}
          width={160}
          height={160}
          className="w-full h-[180px] sm:w-[160px] sm:h-[120px] object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="mt-2 sm:mt-0 sm:ml-3 flex flex-col justify-center w-full">
        <p className="text-gray-500">
          <span
            className="text-[13px] sm:text-[14px] capitalize"
            style={{ fontWeight: 700, fontFamily: "Roboto, sans-serif" }}
          >
            {data.category}
          </span>{" "}
          <span
            className="ml-1 text-[11px] sm:text-[12px]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {data.date}
          </span>
        </p>

        <h3
          className="font-[oswald] text-[15px] sm:text-[17px] font-bold leading-tight break-words whitespace-normal w-full"
        >
          {data.title}
        </h3>
      </div>
    </div>
      </Link>
  );
};

export default TopHorizontalCard;
