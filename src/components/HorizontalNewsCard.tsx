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

const HorizontalNewsCard:React.FC<Props>=({data})=>{
  return (
    <div className="flex max-w-md">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={data.image}
          alt="Five Signs of a Highly Intelligent Person"
          width={120}
          height={120}
          className="w-25 h-25 object-cover"
        />
      </div>

      {/* Text */}
      <div className="ml-3 flex flex-col justify-center">
        <p className="text-gray-500 text-sm">
          <span className="font-semibold">{data.category}</span>{" "}
          <span className="ml-1">{data.date}</span>
        </p>
        <h3 className="mt-1 font-[oswald] text-base font-bold leading-snug">
          {data.title}
        </h3>
      </div>
    </div>
  );
}

export default HorizontalNewsCard;