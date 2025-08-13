import Image from "next/image";


interface NewsData {
  slug: string;
  title:string;
  category: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData;
}
const TopNewsCard: React.FC<Props> = ({ data }) => {

  return (
    <div className="max-w-sm">
      <Image
        src={data.image}
        alt="Worrying Sign In Covid Numbers"
        width={400}
        height={300}
        className="w-full h-[260px] object-cover"
      />

      <div className="mt-1">
        <p className="text-gray-500 text-sm">
          <span className="">{data.category}</span>{" "}
          <span className="ml-1">{data.date}</span>
        </p>
        <h3 className="font-[oswald] text-[24px] font-bold leading-tight">
          {data.title}
        </h3>
      </div>
    </div>
  );
}

export default TopNewsCard;