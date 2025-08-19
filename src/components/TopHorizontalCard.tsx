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

const TopHorizontalCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex max-w-md">
      <div className="flex-shrink-0">
        <Image
          src={data.image}
          alt={data.title}
          width={160}
          height={160}
          className="w-45 h-30 object-cover"
        />
      </div>

      <div className="ml-3 flex flex-col justify-center">
       <p style={{ color: '#838383' }}>
            <span className="text-[14px]" style={{fontWeight:700,fontFamily:'Roboto, sans-serif'}}>{data.category}</span>{" "}
            <span className="ml-1 text-[11px]"style={{fontFamily:'Roboto, sans-serif'}}>{data.date}</span>
          </p>
        <h3 className="mt-1 font-[oswald] text-[17px] font-bold leading-tight line-clamp-2">
          {data.title}
        </h3>
      </div>
    </div>
  );
}

export default TopHorizontalCard;