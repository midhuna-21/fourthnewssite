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

const OverlayArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative w-full">
       <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="block w-full"
        style={{ color: "inherit" }}
      >

      <Image
        src={data.image}
        alt={data.title}
        width={800}
        height={500}
        className="w-full h-[200px] sm:h-[220px] lg:h-[200px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-3 left-3 right-3 text-white">
        <p className="text-sm">
         <span className="text-[14px] text-[#ff3385] capitalize" style={{fontWeight:700,fontFamily:'Roboto, sans-serif'}}>{data.category}</span>{" "}
            <span className="ml-1 text-[11px]"style={{fontFamily:'Roboto, sans-serif'}}>{data.date}</span>
        </p>

        <h3
          className="leading-tight font-['Oswald'] font-bold line-clamp-2 
                     text-[24px]"
        >
          {data.title}
        </h3>
      </div>
      </Link>
    </div>
  );
};

export default OverlayArticleCard;
