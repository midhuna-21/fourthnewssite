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

const OverlayArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative w-full max-w-sm">
      {/* Background Image */}
      <Image
        src={data.image}
        alt="Confusing $16 dental floss swimsuit roasted"
        width={400}
        height={300}
        className="w-full h-[200px] object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Text Overlay */}
      <div className="absolute bottom-3 left-3 right-3 text-white">
        <p className="text-sm">

          <span className="text-[#ff3385] text-[14px]" style={{ fontWeight: 700, fontFamily: 'Roboto, sans-serif' }}>{data.category}</span>{" "}
          <span className="ml-1 text-[11px]" style={{ fontFamily: 'Roboto, sans-serif' }}>{data.date}</span>
        </p>
        <h3 className="leading-tight font-[oswald] text-[24px] line-clamp-2" style={{ fontWeight: 700 }}>
          {data.title}
        </h3>
      </div>
    </div>
  );
}

export default OverlayArticleCard;