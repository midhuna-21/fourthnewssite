import React from "react";
import SecondArticle from "./SecondArticle";
import NewsHeadline from "./NewsHeadline";
import SubHeadline from "./SubHeadline";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}
interface Props {
  data: NewsData[];
}

const ArticleLayout: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 container mx-auto px-4 mt-12">
      {/* Left Section (9/12 width) */}
      <div className="md:col-span-9">
        <SecondArticle data={data[0]} />
      </div>

      {/* Right Section (3/12 width) */}
      <div className="md:col-span-3 flex flex-col gap-2">
        <SubHeadline title="Latest"/>
        <NewsHeadline data={data[0]} />
        <NewsHeadline data={data[1]} />
        {/* <NewsHeadline data={data[2]} /> */}
      </div>
    </div>
  );
};  

export default ArticleLayout;
