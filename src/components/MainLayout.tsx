// components/MainLayout.tsx
import React from "react";
import LargeImageSection from "./LargeImageSection";
import RightSidebar from "./RightSidebar";
import SubHeadlineTwo from "./SubHeadlineTwo";

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

const MainLayout: React.FC<Props> = ({ data }) => {
  if (!data || data.length < 5) {
    return <div className="text-red-500">Not enough data to display layout.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Full Height Black Background */}
      <div className="h-screen bg-black text-white p-6">
        <div className="flex h-full gap-6">

          {/* Left Section: Large Image */}
          {/* Left Section: Large Image */}
          <div className="flex-[2] flex flex-col border-b border-gray-400">
            <SubHeadlineTwo title="News" />
            <div className="flex-1 overflow-hidden">
              <LargeImageSection data={data[0]} />
            </div>
          </div>


          {/* Right Section: Scrollable Sidebar */}
          <div className="flex-1 flex flex-col">
            <SubHeadlineTwo title="More News" />
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <RightSidebar data={data.slice(1, 5)} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MainLayout;
