import SubHeadline from "./SubHeadline";
import NewsCard from "./NewsCard";
import FeaturedArticle from "./FeaturedArticle";
import OverlayArticleCard from "./OverlayArticleCard";
import HorizontalNewsCard from "./HorizontalNewsCard";
import SecondArticle from "./SecondArticle";
import MoreFeaturedArticle from "./MoreFeaturedArticle";


interface NewsData {
    slug:string;
    category:string;
    title:string;
    shortdescription:string;
    description:string;
    date:string;
    image:string;
}

interface Props {
    data:NewsData[];
}

const MoreTopHeadlines: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-24">
      {/* Subheadline for entire section */}
      <SubHeadline title="More Top Headlines" />

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        {/* LEFT */}
        <div className="lg:col-span-3 space-y-3">
          <OverlayArticleCard data={data[0]} />
         <div className="border-r border-[#615e5e54]">
          <div className="border-b border-[#615e5e54] pb-2 pr-3">
               <HorizontalNewsCard data={data[1]} />
          </div>
          <div className="border-b border-[#615e5e54] pb-2 pt-2 pr-3">
               <HorizontalNewsCard data={data[2]} />
          </div>
           <div className="border-b border-[#615e5e54] pb-2 pt-2 pr-3">
               <HorizontalNewsCard data={data[3]} />
          </div>
           <div className="pt-2 pr-3">
               <HorizontalNewsCard data={data[4]} />
          </div>
         </div>
    
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-9">
          {/* Top full-width article */}
          <MoreFeaturedArticle data={data[5]} />

          {/* Three cards in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 border-b border-[#615e5e54]">
           <div className="border-r border-[#615e5e54] pb-7 pr-4">

            <NewsCard data={data[6]} />
           </div>
            <div className="border-r border-[#615e5e54] pr-4">

            <NewsCard data={data[7]} />
            </div>
            <NewsCard data={data[8]} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default MoreTopHeadlines;