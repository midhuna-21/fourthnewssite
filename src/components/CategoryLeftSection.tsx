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
    data:NewsData[];
}
const CategoryLeftSection:React.FC<Props>=({data})=>{
    return (
        <div>
              <div className="mt-12" id="second-more-section">
                       
                        <hr className="my-6" />

                        {/* 3x Second Sections */}
                        <div className="space-y-8">
                            <MoreSecondSection data={data[0]} />
                            <MoreSecondSection data={data[1]} />
                            <MoreSecondSection data={data[2]} />
                            <MoreSecondSection data={data[3]} />
                            <MoreSecondSection data={data[4]} />

                        </div>
                    </div>
        </div>
    )
}
export default CategoryLeftSection;