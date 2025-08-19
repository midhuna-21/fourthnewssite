import Image from "next/image";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}

interface Props {
  data: NewsData;
}

const SecondArticle: React.FC<Props> = ({ data }) => {
  return (
   <div className="flex flex-col md:flex-row border-r border-b border-[#313030] max-w-6xl mx-auto h-[350px]">
  {/* Left Image */}
  <div className="md:w-8/12 w-full h-full">
    <Image
      src={data.image}
      alt={data.title}
      width={800}
      height={500}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Text Content */}
  <div className="md:w-7/12 w-full p-5 md:p-7 flex flex-col justify-center">
    <p className="text-sm" style={{ color: "#838383" }}>
      <span
        className="text-[18px]"
        style={{ fontWeight: 700, fontFamily: "Roboto, sans-serif" }}
      >
        Politics
      </span>{" "}
      <span
        className="ml-1 text-[12px]"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        {data.date}
      </span>
    </p>

    <h2
      className="font-[oswald] text-[36px] font-bold leading-tight"
      style={{ fontWeight: 700 }}
    >
      {data.title}
    </h2>
    <p
      className="mt-2 text-gray-600 text-[16px]"
      style={{
        fontWeight: 400,
        color: "#B0B0B0",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {data.shortdescription}
    </p>
  </div>
</div>

  );
};

export default SecondArticle;
