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
    <div className="container mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT */}
      <div className="lg:col-span-3 space-y-3">
        <SubHeadline title="what's happenging"/>
        <NewsCard data={data[3]}/>
        <NewsCard data={data[5]}/>
        <NewsCard data={data[9]}/>
      </div>

      {/* CENTER */}
      <div className="lg:col-span-6">
        <FeaturedArticle data={data[8]}/>
      </div>

      {/* RIGHT  */}
      <div className="lg:col-span-3 space-y-4">
        {/* Just In Heading */}
       <SubHeadline title="Just In"/>

        {/* Top Overlay Article */}
        <OverlayArticleCard data={data[0]}/>

        {/* Horizontal Cards */}
       <div className="space-y-3">
         <HorizontalNewsCard data={data[1]}/>
        <HorizontalNewsCard data={data[2]}/>
        <HorizontalNewsCard data={data[4]}/>
        <HorizontalNewsCard data={data[6]}/>
        <HorizontalNewsCard data={data[7]}/>
       </div>

      </div>
    </div>
  );
}

export default NewsFirstLayout;