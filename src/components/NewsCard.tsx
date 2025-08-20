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

const NewsCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full lg:max-w-sm"> 
        <Link
          href={`/${data.category}/${data.slug}`}
          title={data.slug}
        >
        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={500}
          className="
            w-full 
            h-[180px] sm:h-[200px] lg:h-[170px] 
            object-cover
          "
        />

        <div className="mt-2">
          <p className="flex items-center gap-2 text-gray-500">
            <span className="text-[14px] capitalize" style={{fontWeight:700,fontFamily:'Roboto, sans-serif'}}>{data.category}</span>{" "}
            <span className="ml-1 text-[11px]"style={{fontFamily:'Roboto, sans-serif'}}>{data.date}</span>
          </p>

          {/* Title text size responsive */}
          <p
            className="font-['Oswald'] font-bold line-clamp-2 
                       text-[20px] sm:text-[24px] lg:text-[24px] 
                       leading-snug lg:leading-tight"
          >
            {data.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
