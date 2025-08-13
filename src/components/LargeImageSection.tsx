
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

const LargeImageSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative w-full h-full border-r pr-4 mt-4">
      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full object-cover"
      />

      {/* Play Button */}
      <div className="absolute top-4 left-4 bg-emerald-400 rounded-full w-12 h-12 flex items-center justify-center">
        <span className="text-black text-lg font-bold">▶</span>
      </div>

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70">
        <h2 className="text-3xl font-extrabold">{data.title}</h2>
        <p className="text-sm mt-1 text-gray-200">{data.shortdescription}</p>
      </div>
    </div>
  );
};

export default LargeImageSection;