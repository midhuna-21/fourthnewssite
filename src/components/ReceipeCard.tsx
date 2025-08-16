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
<div className="flex flex-col sm:flex-row w-full border-b border-gray-200">
  {/* Image */}
  <div className="relative w-full sm:w-2/5 h-36 sm:h-auto">
    <Image
      src={data.image}
      alt={data.title}
      fill
      className="object-cover"
    />
  </div>

  {/* Text Content */}
  <div className="flex flex-col justify-center px-3 sm:px-5 py-2 sm:py-0 w-full sm:w-3/5">
    <p className="font-oswald text-sm sm:text-base font-semibold" style={{color:'#838383'}}>
      {data.category}{" "}
      <span className=" font-normal">{data.date}</span>
    </p>
    <h2 className="font-[oswald] text-lg sm:text-xl font-bold leading-snug mt-1">
      {data.title}
    </h2>
    <p
      className="text-xs sm:text-sm mt-1 line-clamp-2"
      style={{ color: "#838383", fontWeight: 400 }}
    >
      {data.shortdescription}
    </p>
  </div>
</div>

  );
};

export default RecipeCard;
