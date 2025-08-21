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
   <div className="relative w-full h-[600px] pr-4 mt-4 mx-auto mb-6">

  {/* Image */}
  <Image
    src={data.image}
    alt={data.title}
    fill
    className="object-cover"
    priority
  />

  {/* Play Button */}
  <div className="absolute top-4 left-4 bg-emerald-400 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
    <span className="text-black text-lg font-bold">▶</span>
  </div>

  {/* Bottom Overlay */}
  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 rounded-b-lg">
    <h2
      className="text-[20px] md:text-[28px] lg:text-[36px] text-white font-[oswald] leading-snug"
      style={{ fontWeight: 700 }}
    >
      {data.title}
    </h2>
    <p
      className="text-[14px] md:text-[16px] mt-1 leading-relaxed"
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
