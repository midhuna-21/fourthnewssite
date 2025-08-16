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
const MoreSideCard:React.FC<Props>=({data})=>{
  return (
    <div className="w-full mb-4">
      {/* Image */}
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="mt-3">
        <p className="text-sm font-semibold" style={{color:'#838383'}}>
          {data.category}{" "}
          <span className="font-normal">{data.date}</span>
        </p>
        <h3 className="text-lg md:text-xl font-bold mt-1 leading-snug">
          {data.title}
        </h3>
      </div>
    </div>
  );
}

export default MoreSideCard