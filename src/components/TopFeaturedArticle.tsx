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
        <div className="flex flex-col md:flex-row border-b border-[#313030] max-w-6xl mx-auto h-auto md:h-80">

            {/* Left Text Content */}
            <div className="md:w-6/12 w-full flex flex-col justify-center pr-0 md:pr-4 py-4">
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
                    className="mt-2 font-[oswald] text-xl md:text-3xl lg:text-[36px] leading-snug md:leading-tight line-clamp-3"
                    style={{ fontWeight: 700 }}
                >
                    {data.title}
                </p>

                {/* Responsive Description */}
                <p
                    className="mt-3 text-sm md:text-base leading-snug md:leading-tight line-clamp-3"
                    style={{ fontWeight: 400, color: "#b0b0b0" }}
                >
                    {data.shortdescription}
                </p>
            </div>

            {/* Right Image */}
            <div className="md:w-6/12 w-full">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={900}
                    height={700}
                    className="w-full h-56 md:h-full object-cover"
                />
            </div>
        </div>
      </Link>
    );
};

export default TopFeaturedArticle;
