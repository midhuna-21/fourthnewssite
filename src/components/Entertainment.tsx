import LifestyleCard from "./LifeStyleCard";
import SubHeadline from "./SubHeadline";
import TopHorizontalCard from "./TopHorizontalCard";
import VibeNewsCard from "./VibeNewsCard";

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

const EntertainmentSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
    <SubHeadline  title="Entertainment"/>

      {/* Top Two Big Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Big Card (2/3 width) */}
        <div className="md:col-span-2">
          <LifestyleCard data={data[0]} />
        </div>

        {/* Right Big Card (1/3 width) */}
        <div>
          <VibeNewsCard data={data[1]} />
        </div>
      </div>

      {/* Bottom 3 Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <TopHorizontalCard data={data[2]} />
        <TopHorizontalCard data={data[3]} />
        <TopHorizontalCard data={data[4]} />
      </div>
    </div>
  );
};

export default EntertainmentSection;
