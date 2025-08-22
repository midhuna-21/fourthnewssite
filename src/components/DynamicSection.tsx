"use client";
import React, { useState, useMemo } from "react";
import Categories from "./Categories";
import LatestNewsSection from "@/components/LatestNewsSection";
import FourCardGrid from "@/components/FourCardGrid";

interface NewsData {
  slug: string;
  title: string;
  shortdescription: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData[];
}

const DynamicSection: React.FC<Props> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("politics");

  // Filtered data
  const filteredData = useMemo(() => {
    console.log(selectedCategory,'selectedCategory')
    if (selectedCategory === "All") return data;
    return data.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, data]);

  return (
  <div className="md:mt-0 mt-7">
  {/* Headline + Categories side by side */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 md:gap-3 mb-3">
    {/* Left side */}
    <div className="flex items-center flex-1">
  <h2 className="font-[oswald] text-[20px] uppercase tracking-wide font-semibold">
    Latest
  </h2>
  <div className="h-[0.5px] ml-2 mt-4 sm:mt-0 bg-[#646464] w-20 sm:w-32 md:w-full"></div>
</div>


    {/* Categories */}
    <nav className="ml-0 sm:ml-4 flex-shrink-0">
      <Categories
        selected={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </nav>
  </div>

  {/* LatestNewsSection (show only if we have >= 2 items) */}
  {filteredData.length >= 2 && (
    <LatestNewsSection data={filteredData.slice(0, 2)} />
  )}

  {/* FourCardGrid (show only if we have >= 1 item) */}
  {filteredData.length > 2 && (
    <FourCardGrid data={filteredData.slice(2, 6)} />
  )}
</div>

  );
};

export default DynamicSection;
