"use client";

import { useEffect, useState } from "react";
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
    const [scrollState, setScrollState] = useState<'initial' | 'sticky' | 'normal'>('initial');

    useEffect(() => {
        const handleScroll = () => {
            const firstSection = document.getElementById('first-more-section');
            const secondSection = document.getElementById('second-more-section');

            if (!firstSection || !secondSection) return;

            const firstSectionRect = firstSection.getBoundingClientRect();
            const secondSectionRect = secondSection.getBoundingClientRect();

            // When first section reaches the top
            if (firstSectionRect.top <= 0 && secondSectionRect.top > window.innerHeight) {
                setScrollState('sticky');
            }
            // When second section is about to come into view
            else if (secondSectionRect.top <= window.innerHeight) {
                setScrollState('normal');
            }
            // Initial state
            else {
                setScrollState('initial');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT MAIN CONTENT */}
                <div className="col-span-2">
                    {/* First Section */}
                    <SubHeadline title="More News" />
                    <div id="first-more-section">
                        <MoreFirstSection data={data[0]} />
                    </div>
                    <hr className="my-6" />

                    {/* 3x Second Sections */}
                    <div className="space-y-8">
                        <MoreSecondSection data={data[1]} />
                        <MoreSecondSection data={data[2]} />
                        <MoreSecondSection data={data[3]} />
                    </div>

                    {/* Second First Section */}
                    <div className="mt-12" id="second-more-section">
                        <MoreFirstSection data={data[4]} />
                        <hr className="my-6" />

                        {/* 3x Second Sections */}
                        <div className="space-y-8">
                            <MoreSecondSection data={data[5]} />
                            <MoreSecondSection data={data[6]} />
                            <MoreSecondSection data={data[7]} />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="hidden lg:block">
                    <div

                    >
                        <div>
                            <SubHeadline title="heloo" />
                            <div className="mt-4">
                                <MoreSideCard data={data[0]} />
                                <MoreSideCard data={data[0]} />
                                <MoreSideCard data={data[0]} />
                            </div>
                        </div>
                        <div>
                            <SubHeadline title="Trending Topic" />
                            <div className="mt-4">
                                {[data[2], data[3], data[4]].map((item, index) => (
                                    <div key={index} className={index < 2 ? "pb-2 border-b border-gray-300 mb-2" : ""}>
                                        <TopHorizontalCard data={item} />
                                    </div>
                                ))
                                }
                            </div>
                        </div>

                    </div>
                    <div className="mt-16">
                        <VibeNewsCard data={data[10]} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ScrollLayout;
