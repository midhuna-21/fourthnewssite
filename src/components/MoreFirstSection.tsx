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
        <p style={{ color: '#838383' }}>
            <span className="text-[18px]" style={{fontWeight:700,fontFamily:'Roboto, sans-serif'}}>{data.category}</span>{" "}
            <span className="ml-1 text-[12px]"style={{fontFamily:'Roboto, sans-serif'}}>{data.date}</span>
          </p>
        <h2 className="text-[36px] font-[oswald] leading-tight line-clamp-1" style={{fontWeight:700}}>{data.title}</h2>
        <p className="mt-1 text-[16px]" style={{fontFamily:'Roboto, sans-serif',color:'#b0b0b0'}}>{data.shortdescription}</p>
      </div>
    </div>
  );
}

export default MoreFirstSection;