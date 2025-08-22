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

const LargeImageSection: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.slug}
      className="block w-full"
      style={{ color: "inherit" }}
    >
   <div className="relative w-full md:h-[600px] h-[400px] pr-4 mt-4 mx-auto mb-6">

  {/* Image */}
  <Image
    src={data.image}
    alt={data.title}
    fill
    className="object-cover"
    priority
  />

  {/* Bottom Overlay */}
  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 rounded-b-lg">
    <h2
      className="text-[20px] md:text-[28px] lg:text-[36px] md:mt-0 mt-3 text-white font-[oswald] leading-snug"
      style={{ fontWeight: 700 }}
    >
      {data.title}
    </h2>
    <p
      className="text-[14px] md:text-[16px] mt-1 leading-tight line-clamp-3"
      style={{ color: "#A7A7A7", fontFamily: "Roboto, sans-serif" }}
    >
      {data.shortdescription}
    </p>
  </div>
</div>

    </Link>
  );
};

export default LargeImageSection;
