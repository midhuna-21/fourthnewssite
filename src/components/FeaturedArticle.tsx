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

const FeaturedArticle: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="block w-full"
        style={{ color: "inherit" }}
      >

        {/* Category + Date */}
        <p className="text-sm text-gray-500">
          <span
            className="text-[18px] capitalize "
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
        <h1
          className="font-[oswald] font-bold leading-tight text-[24px] sm:text-[36px] md:text-[36px]"
          style={{ fontWeight: 700 }}
        >
          {data.title}
        </h1>
      </Link>
      {/* Short Description */}
      <p
        className="text-[14px] sm:text-[15px] md:text-[16px] mt-2 text-gray-500"
        style={{
          fontWeight: 400,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {data.shortdescription}
      </p>

      {/* Image */}
      <div className="mt-4">
        <Link
          href={`/${data.category}/${data.slug}`}
          title={data.slug}
          className="block w-full"
          style={{ color: "inherit" }}
        >

          <Image
            src={data.image}
            alt={data.title}
            width={1000}
            height={800}
            className="w-full h-[220px] sm:h-[350px] md:h-[590px] object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArticle;
