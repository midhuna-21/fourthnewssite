import MoreSecondSection from "./MoreSecondSection";

interface NewsData {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

interface Props {
  data: NewsData[];
}

const CategoryLeftSection: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="mt-12" id="second-more-section">
        <div className="space-y-5">
          {data.map((item, index) => (
            <div
              key={item.slug || index}
              className={index !== data.length - 1 ? "border-b border-[#838383] pb-5" : ""}
            >
              <MoreSecondSection data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryLeftSection;
