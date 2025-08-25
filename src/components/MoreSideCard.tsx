import Image from "next/image";
import Link from "next/link";

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
const MoreSideCard: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.slug}
    >
      <div className="w-full mb-4">
        {/* Image */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out" />
        </div>


        {/* Content */}
        <div className="mt-2">
          <p className="text-gray-500">
            <span
              className="text-[14px] capitalize"
              style={{ fontWeight: 700, fontFamily: "Roboto, sans-serif" }}
            >
              {data.category}
            </span>
            <span
              className="ml-1 text-[11px]"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {data.date}
            </span>
          </p>

          <p
            className="text-[17px] md:text-[24px] font-[oswald] leading-tight"
            style={{ fontWeight: 700 }}
          >
            {data.title}
          </p>
        </div>

      </div>
    </Link>
  );
}

export default MoreSideCard