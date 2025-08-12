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
    <div className="flex flex-col md:flex-row border-r border-b border-gray-400 max-w-6xl mx-auto">
      {/* Left Image */}
      <div className="md:w-7/12 w-full">
        {/* Slightly shorter ratio */}
        <div className="w-full aspect-[4/2.7]">
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={450} // reduced from 500
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Text Content */}
      <div className="md:w-5/12 w-full p-4 md:p-6 flex flex-col justify-center">
        <p className="text-gray-500 text-sm">
          <span className="font-semibold">{data.category}</span>{" "}
          <span className="ml-1">{data.date}</span>
        </p>

        <h2
          className="mt-1 font-[oswald] text-2xl md:text-3xl font-bold text-[36px]"
          style={{ fontWeight: 700 }}
        >
          {data.title}
        </h2>

        <p
          className="mt-2 text-gray-600 text-[16px]"
          style={{ fontWeight: 400 }}
        >
          {data.shortdescription}
        </p>
      </div>
    </div>
  );
};

export default SecondArticle;
