import Image from "next/image";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData;
}

const RecipeCard: React.FC<Props> = ({ data }) => {
  return (
<div className="flex flex-col sm:flex-row w-full border-b border-[#313030] min-h-[150px]">
  {/* Image */}
  <div className="relative w-full sm:w-2/5 h-40 sm:h-auto">
    <Image
      src={data.image}
      alt={data.title}
      fill
      className="object-cover"
    />
  </div>

  {/* Text Content */}
  <div className="flex flex-col justify-center px-3 sm:px-5 py-3 sm:py-2 w-full sm:w-3/5">
    <p style={{ color: '#838383' }}>
      <span
        className="text-[14px]"
        style={{ fontWeight: 700, fontFamily: 'Roboto, sans-serif' }}
      >
        {data.category}
      </span>{" "}
      <span
        className="ml-1 text-[11px]"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {data.date}
      </span>
    </p>
    <h2
      className="font-[oswald] text-[24px] leading-tight line-clamp-2 mt-1"
      style={{ fontWeight: 700 }}
    >
      {data.title}
    </h2>
    <p
      className="text-[14px] mt-1 line-clamp-2 leading-tight"
      style={{ color: "#838383", fontWeight: 400 }}
    >
      {data.shortdescription}
    </p>
  </div>
</div>


  );
};

export default RecipeCard;
