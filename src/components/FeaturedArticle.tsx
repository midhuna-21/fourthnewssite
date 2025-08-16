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
      <p className=" text-sm" style={{color:'#838383'}}>
        <span className="text-[18px]" style={{fontWeight:700, fontFamily:'Roboto, sans-serif'}}>Politics</span>{" "}
        <span className="ml-1 text-[12px]"style={{fontFamily:'Roboto, sans-serif'}}>{data.date}</span>
      </p>

      <h1 className="font-[oswald] font-bold leading-tight text-[36px]"style={{fontWeight:700}}>
        {data.title}
      </h1>

      <p className="text-[16px]" style={{color:'#B0B0B0',fontWeight:400,fontFamily:'Roboto, sans-serif'}}>
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