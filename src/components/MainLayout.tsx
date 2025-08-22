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
    // if (!data || data.length < 5) {
    //   return <div className="text-red-500">Not enough data to display layout.</div>;
    // }

    return (
<div className="mt-18">
  {/* Full Height Black Background */}
<div className="min-h-[105vh] lg:h-[105vh] bg-black text-white p-6">

    <div className="flex flex-col lg:flex-row lg:h-full gap-0 md:gap-6">

      {/* Left Section: Large Image */}
      <div className="lg:flex-[2] flex flex-col md:border-b pb-5 lg:border-r-0 border-[#313030]">
        <SubHeadlineTwo title="News" />
        <div className="lg:flex-1 overflow-hidden">
          <LargeImageSection data={data[0]} />
        </div>
      </div>

      {/* Right Section: Scrollable Sidebar */}
      <div className="lg:flex-1 flex flex-col md:pt-5 lg:pt-0">
        <SubHeadlineTwo title="Latest" />
        <div className="lg:flex-1 lg:overflow-y-auto custom-scrollbar">
          <RightSidebar data={data.slice(1, 5)} />
        </div>
      </div>

    </div>
  </div>
</div>
    );
  };

  export default MainLayout;
