import Image from "next/image";

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

const SmallCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative w-full">
      <Image
        src={data.image}
        alt={data.title}
        width={400}
        height={300}
        className="w-full h-50 object-cover"
      />

      <div className="absolute top-2 left-2 bg-green-400 rounded-full p-2">
        <span className="text-black font-bold">▶</span>
      </div>
      <div className="bg-black text-white p-3">
        <p className="text-md line-clamp-2 leading-tight font-[oswald] text-[24px]" style={{fontWeight:700}}>{data.title}</p>
      </div>
    </div>
  );
}

export default SmallCard;