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
    <div className="max-w-sm">
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="text-decoration-none w-100"
        style={{ color: 'inherit' }}
      >
        <Image
          src={data.image}
          alt="Worrying Sign In Covid Numbers"
          width={400}
          height={300}
          className="w-full h-[170px] object-cover"
        />

        <div className="mt-1">
          <p style={{ color: '#838383' }}>
            <span className="text-[14px]" style={{fontWeight:700,fontFamily:'Roboto, sans-serif'}}>{data.category}</span>{" "}
            <span className="ml-1 text-[11px]"style={{fontFamily:'Roboto, sans-serif'}}>{data.date}</span>
          </p>
          <h3 className="font-[oswald] text-[24px] leading-tight line-clamp-2"style={{fontWeight:700}}>
            {data.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default NewsCard;