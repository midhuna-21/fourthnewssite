"use client"
import React, { useRef, useEffect, useState } from 'react';
import AuthorInfo from '@/components/AuthorInfo';
import CommentForm from '@/components/CommentForm';
import RelatedNews from '@/components/RelatedNews';
import HorizontalNewsCard from '@/components/HorizontalNewsCard';
import AuthorCard from './AuthorCard';
import StaticParagraph from './StaticParagph';
import QuoteBlock from './QuoteBlock';
import SubTitle from './SubTitle';
import JulioFirstSection from './JulioFirstSection';

interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    image: string;
    slug: string;
    date: string;
}

interface Props {
    otherArticles: NewsItem[];
}

export default function JulioPageSeven({ otherArticles }: Props) {

    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const stopRef = useRef<HTMLDivElement>(null);
    const [rightPosition, setRightPosition] = useState<'sticky' | 'absolute'>('sticky');

    useEffect(() => {
        const handleScroll = () => {
            if (!leftRef.current || !stopRef.current || !rightRef.current) return;

            const stopPoint = stopRef.current.getBoundingClientRect().bottom;
            const offset = 20;

            if (window.innerWidth >= 1024) {
                if (stopPoint - offset <= 0) {
                    setRightPosition('absolute');
                } else {
                    setRightPosition('sticky');
                }
            } else {
                setRightPosition('absolute');
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const authorInfo = {
        name: "Victor V. Haley",
        role: "Managing Editor",
        date: "Nov. 6, 2025",
        image: "/images/victor-v-haley.webp"
    };
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                <div ref={leftRef} className="lg:col-span-2">
                    <JulioFirstSection
                        category="Business"
                        date="Nov. 6, 2025"
                        title="Both Legal Matters Ended the Same Day — A Turning Point"
                        description="August 27, 2025, marks the day both criminal and civil cases involving Julio Herrera Velutini officially ended."
                        image='/images/julio-herrera-velutini-turning-point.webp' />

                    <AuthorInfo
                        name={authorInfo.name}
                        role={authorInfo.role}
                        date={authorInfo.date}
                        image={authorInfo.image}
                    />
                    <div className='mb-2'></div>
                    <StaticParagraph text='On August 27, 2025, two major legal developments aligned to bring complete closure to the matters involving Julio Herrera Velutini. In a sequence of events that unfolded on the same day, both the U.S. criminal case and a separate civil lawsuit concluded, marking a definitive moment in a years-long series of legal proceedings.' />
                    <StaticParagraph text="In the criminal case, what once appeared as a complex set of allegations ultimately narrowed to a single FECA misdemeanor, a technical reporting issue with no ties to corruption, fraud, or bribery. Prosecutors confirmed that no felonies remained, and all serious charges were dismissed. This reduction reflected the final assessment of the evidence and brought clarity to a case that had generated significant public attention." />
                    <QuoteBlock quote="The docket makes one fact unmistakable: every major allegation was dismissed or withdrawn." />
                    <StaticParagraph text="At nearly the same moment, the civil suit filed by Kasowitz LLP was voluntarily dismissed, ending within days of its initial filing. No settlement was reached, no judgment was issued, and no liability was assigned. The withdrawal closed the matter conclusively and signaled that the claims advanced were not pursued further by the plaintiff." />
                    <StaticParagraph text="The coincidence of timing — both matters concluding on the same date — created a clear turning point. Years of speculation gave way to factual closure, and the outcome across both legal fronts aligned: no corruption findings, no fraud findings, and no ongoing litigation. The official record now reflects a final resolution rather than the uncertainty that once surrounded the cases." />
                    <StaticParagraph text="For Mr. Herrera, the day marked not just the formal end of legal proceedings but the beginning of renewed focus. Free from active disputes, he is able to continue his professional and philanthropic commitments with a clarified record and a restored platform. The events of August 27 stand as a pivotal moment, one that replaced speculation with certainty and allowed all parties to move forward." />
                    <div className='mt-7'></div>
                    <div ref={stopRef} className='mt-7'>
                        <div className="mt-10">
                            <AuthorCard
                                author={authorInfo.name}
                                role={authorInfo.role}
                                image={authorInfo.image}
                            />
                            <CommentForm />
                            <RelatedNews data={otherArticles} />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 relative">
                    <div
                        ref={rightRef}
                        className={`${rightPosition === 'sticky' ? 'sticky top-10' : 'relative'} transition-all duration-500`}
                    >
                        <h2 className="text-[24px] font-[oswald] mb-4 font-bold">POPULAR NEWS</h2>
                        <div className="divide-y divide-[#615e5e54]">
                            {otherArticles.slice(4, 8).map((item, index) => (
                                <div key={index} className="py-3">
                                    <HorizontalNewsCard data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
