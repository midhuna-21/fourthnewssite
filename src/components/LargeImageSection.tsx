import Image from "next/image";

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
    <div className="relative w-full h-[98%] border-r border-[#313030] pr-4 mt-4 mx-auto mb-6">
      {/* Image */}
      <Image
        src={data.image}
        alt={data.title}
        width={1200}
        height={700}
        className="w-full h-full object-cover"
        priority
      />

      {/* Play Button */}
      <div className="absolute top-4 left-4 bg-emerald-400 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
        <span className="text-black text-lg font-bold">▶</span>
      </div>

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 rounded-b-lg ">
        <h2 className="text-[36px] text-white font-[oswald] leading-tight" style={{ fontWeight: 700 }}>{data.title}</h2>
        <p className="text-[16px] mt-1 " style={{ color: "#A7A7A7", fontFamily: 'Roboto, sans-serif' }}>
          {data.shortdescription}
        </p>
      </div>
    </div>
  );
};

export default LargeImageSection;
