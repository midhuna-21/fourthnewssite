// components/ArticleGrid.tsx
import HorizonArticle from "./HorizonArticle";
import SubHeadline from "./SubHeadline";

interface NewsData {
    slug:string;
    title:string;
    category:string;
    shortdescription:string;
    description:string;
    date:string;
    image:string;
}

interface Props {
    data:NewsData[];
}

const ArticleGrid:React.FC<Props>=({data})=>{
  return (
    <div className="container mx-auto px-4 py-8 mt-7">
      <SubHeadline title="Recommended For You" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-b border-gray-400 mt-4">
        <div className="border-r pr-4 border-[#F5F5F5]">
              <HorizonArticle data={data[0]}/>
        </div>
          <div className="border-r pr-4 border-[#F5F5F5]">
              <HorizonArticle data={data[1]}/>
        </div>
           <div className="border-r pr-4 border-[#F5F5F5]">
              <HorizonArticle data={data[2]}/>
        </div>
          <HorizonArticle data={data[3]}/>
       
      </div>
    </div>
  );
}

export default ArticleGrid;
