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

const HorizontalNewsCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex max-w-md">
      {/* Image */}
      <div className="flex-shrink-0 relative w-[105px] aspect-[105/95]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="ml-3 flex flex-col justify-center">
        <p>
          <span
            className="text-[14px]"
            style={{
              fontWeight: 700,
              fontFamily: "Roboto, sans-serif",
              color: "#9b9b9b",
            }}
          >
            {data.category}
          </span>{" "}
          <span
            className="ml-1 text-[11px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "#838383",
            }}
          >
            {data.date}
          </span>
        </p>
        <h3
          className="mt-1 font-[oswald] text-[17px] leading-snug line-clamp-2"
          style={{ fontWeight: 700 }}
        >
          {data.title}
        </h3>
      </div>
    </div>
  );
};

export default HorizontalNewsCard;
