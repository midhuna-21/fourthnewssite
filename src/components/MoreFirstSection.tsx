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

const MoreFirstSection:React.FC<Props>=({data})=>{
  return (
    <div className="w-full mt-4">
      {/* Image */}
      <div className="relative w-full h-72 md:h-[450px]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className=" text-sm font-semibold" style={{color:'#838383'}}>
          {data.category} <span className="font-normal">{data.date}</span>
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-1">{data.title}</h2>
        <p className="mt-2 text-sm md:text-base" style={{color:'#838383'}}>{data.shortdescription}</p>
      </div>
    </div>
  );
}

export default MoreFirstSection;