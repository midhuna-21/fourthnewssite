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

const RelatedNews: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {/* Subheadline for entire section */}
      <SubHeadline title="Related News" />
        <div className="lg:col-span-9">
          {/* Three cards in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            <NewsCard data={data[3]} />
            <NewsCard data={data[4]} />
            <NewsCard data={data[5]} />
          </div>
        </div>
    </div>
  );
};


export default RelatedNews;