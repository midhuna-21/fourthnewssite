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
     <div className="mt-2">
  <p style={{ color: "#838383" }}>
    <span
      className="text-[14px]"
      style={{ fontWeight: 700, fontFamily: "Roboto, sans-serif" }}
    >
      {data.category}
    </span>
    <span
      className="ml-1 text-[11px]"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {data.date}
    </span>
  </p>

  <p
    className="text-[24px] font-[oswald] leading-tight"
    style={{ fontWeight: 700 }}
  >
    {data.title}
  </p>
</div>

    </div>
  );
}

export default MoreSideCard