"use client";

import { useEffect, useState, useRef } from "react";
import MoreFirstSection from "./MoreFirstSection";
import MoreSecondSection from "./MoreSecondSection";
import SubHeadline from "./SubHeadline";
import RightSidebar from "./RightSidebar";
import MoreSideCard from "./MoreSideCard";
import TopHorizontalCard from "./TopHorizontalCard";
import VibeNewsCard from "./VibeNewsCard";

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

const ScrollLayout: React.FC<Props> = ({ data }) => {
  const leftRef = useRef<HTMLDivElement>(null);
  const stopRef = useRef<HTMLDivElement>(null);
  const [stopScroll, setStopScroll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If second section reaches top of viewport, stop left scroll
        setStopScroll(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (stopRef.current) observer.observe(stopRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full container mx-auto px-4 py-8 mb-12 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div
          className={`col-span-2 transition-transform duration-500 ${stopScroll ? "translate-y-[50px]" : ""
            }`}
          ref={leftRef}
        >
          <SubHeadline title="More News" />
          <div id="first-more-section">
            <div className="border-b border-[#313030] pb-6">
              <MoreFirstSection data={data[0]} />
            </div>
          </div>
          {/* <hr className="my-6" /> */}
          <div className="space-y-3 mt-8">
            <div className="border-b border-[#313030] pb-3">
              <MoreSecondSection data={data[1]} />
            </div>
            <div className="border-b border-[#313030] pb-3">

              <MoreSecondSection data={data[2]} />
            </div>

            <MoreSecondSection data={data[3]} />
          </div>

          <div className="mt-8" id="second-more-section" ref={stopRef}>
            <div className="border-[#313030] border-t pt-5 border-b pb-8">
              <MoreFirstSection data={data[4]} />
            </div>
            {/* <hr className="my-6" /> */}
            <div className="space-y-3 mt-8">
              <div className="border-b border-[#313030] pb-3">
                <MoreSecondSection data={data[5]} />
              </div>
              <div className="border-b border-[#313030] pb-3">
                <MoreSecondSection data={data[6]} />
              </div>
              <MoreSecondSection data={data[7]} />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-1">
          <div className="sticky top-10">
            <SubHeadline title="heloo" />
            <div className="mt-4">
              <MoreSideCard data={data[0]} />
              <MoreSideCard data={data[0]} />
              <MoreSideCard data={data[0]} />
            </div>
            <div className="mt-12">
              <SubHeadline title="Trending Topic" />
              <div className="mt-4">
                {[data[2], data[3], data[4]].map((item, index) => (
                  <div key={index} className={index < 2 ? "pb-2 border-b border-[#313030] mb-2" : ""}>
                    <TopHorizontalCard data={item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16">
              <VibeNewsCard data={data[10]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScrollLayout;
