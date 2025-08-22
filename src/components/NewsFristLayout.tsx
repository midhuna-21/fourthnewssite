import SubHeadline from "./SubHeadline";
import NewsCard from "./NewsCard";
import FeaturedArticle from "./FeaturedArticle";
import OverlayArticleCard from "./OverlayArticleCard";
import HorizontalNewsCard from "./HorizontalNewsCard";


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
const NewsFirstLayout:React.FC<Props>=({data})=>{
    
  return (
    <div className="mt-12 md:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-15 md:gap-6">
      {/* LEFT */}
      <div className="lg:col-span-3 md:space-y-3 space-y-4">
        <SubHeadline title="what's happenging"/>
        <NewsCard data={data[0]}/>
        <NewsCard data={data[1]}/>
        <NewsCard data={data[2]}/>
      </div>

      {/* CENTER */}
      <div className="lg:col-span-6">
        <FeaturedArticle data={data[3]}/>
      </div>

      {/* RIGHT  */}
      <div className="lg:col-span-3 space-y-3 md:space-y-4">
        {/* Just In Heading */}
       <SubHeadline title="Just In"/>

        {/* Top Overlay Article */}
        <OverlayArticleCard data={data[4]}/>

        {/* Horizontal Cards */}
       <div className="md:space-y-3 space-y-4">
         <HorizontalNewsCard data={data[5]}/>
        <HorizontalNewsCard data={data[6]}/>
        <HorizontalNewsCard data={data[7]}/>
        <HorizontalNewsCard data={data[8]}/>
        <HorizontalNewsCard data={data[9]}/>
       </div>

      </div>
    </div>
  );
}

export default NewsFirstLayout;