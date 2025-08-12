import Image from "next/image";


interface NewsData {
    slug:string;
    title:string;
    category:string;
    shortdescription:string;
    description:string;
    date:string;
    image:string;
}

interface Props {
    data:NewsData;
}

const OverlayArticleCard:React.FC<Props>=({data})=>{
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
          <span className="font-semibold text-pink-400">{data.category}</span>{" "}
          <span className="ml-1 text-gray-200">{data.date}</span>
        </p>
        <h3 className="mt-1 font-[oswald] text-[24px] font-bold leading-snug">
          {data.title}
        </h3>
      </div>
    </div>
  );
}

export default OverlayArticleCard;