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

const FeaturedArticle:React.FC<Props>=({data})=>{
  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-gray-500 text-sm">
        <span className="text-[18px]" style={{fontWeight:700, fontFamily:'Roboto, sans-serif'}}>Politics</span>{" "}
        <span className="ml-1">{data.date}</span>
      </p>

      <h1 className="font-[oswald] text-3xl sm:text-4xl font-bold leading-tight">
        {data.title}
      </h1>

      <p className=" text-gray-600 text-base sm:text-lg font-[oswald]">
        {data.shortdescription}
      </p>

      <div className="mt-4">
        <Image
          src={data.image}
          alt="5 Takeaways From The First Round Of France’s Election"
          width={1000}
          height={800}
          className="w-full h-[590px] object-cover"
        />
      </div>
    </div>
  );
}

export default FeaturedArticle;