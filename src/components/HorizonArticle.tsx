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

const HorizonArticle: React.FC<Props> = ({data}) => {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="w-full h-64 relative">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="mt-3">
        <p className="text-sm font-semibold text-gray-700">
          {data.category}
          <span className="text-gray-500 font-normal ml-2">{data.date}</span>
        </p>
        <h2 className="text-lg font-[oswald] text-[24px] hover:underline mt-1 leading-snug" style={{fontWeight:700}}>
          {data.title}
        </h2>
      </div>
    </div>
  );
};

export default HorizonArticle;
