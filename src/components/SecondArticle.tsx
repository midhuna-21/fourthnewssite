import Image from "next/image";
import Link from "next/link";

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
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="block w-full"
        style={{ color: "inherit" }}
      >

    <div className="flex flex-col md:flex-row border-r border-b border-[#615e5e54] max-w-6xl mx-auto h-auto md:h-[350px]">
      {/* Left Image */}
      <div className="md:w-8/12 w-full h-[220px] md:h-full">
      
        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text Content */}
      <div className="md:w-7/12 w-full mt-3 p-0 md:p-7 flex flex-col justify-center">
        <p className="text-sm text-gray-500">
          <span
            className="text-[18px]"
            style={{ fontWeight: 700, fontFamily: "Roboto, sans-serif" }}
          >
            Politics
          </span>{" "}
          <span
            className="ml-1 [12px]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {data.date}
          </span>
        </p>

        <h2
          className="font-[oswald] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-snug md:leading-tight"
          style={{ fontWeight: 700 }}
        >
          {data.title}
        </h2>

        <p
          className="mt-2 text-[14px] text-gray-500 md:text-[16px]"
          style={{
            fontWeight: 400,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {data.shortdescription}
        </p>
      </div>
    </div>
      </Link>
  );
};

export default SecondArticle;
