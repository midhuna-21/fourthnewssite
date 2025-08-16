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

const MoreSecondSection:React.FC<Props>=({data})=>{
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* Image */}
      <div className="relative w-full h-64 md:h-64">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div>
        <p className="text-sm font-semibold" style={{color:'#838383'}}>
          {data.category} <span className="font-normal">{data.date}</span>
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 leading-snug">
          {data.title}
        </h2>
      </div>
    </div>
  );
}

export default MoreSecondSection;