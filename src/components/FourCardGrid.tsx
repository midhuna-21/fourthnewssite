import RecipeCard from "./ReceipeCard";


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
  data: NewsData[];
}

const FourCardGrid: React.FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {data.slice(0, 4).map((data) => (
          <RecipeCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default FourCardGrid;
