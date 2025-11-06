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
import picture from '../../public/images/julio.webp'

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

export default function JulioPageTwo({ otherArticles }: Props) {

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
                        title="Facts Over Speculation — Legal Clarity for Julio Herrera Velutini"
                        description="After years of allegations, the legal record shows no corruption, no fraud — only one minor FECA misdemeanor."
                        image='/images/julio-herrera-velutini-legal-clarity.webp' />

                    <AuthorInfo
                        name={authorInfo.name}
                        role={authorInfo.role}
                        date={authorInfo.date}
                        image={authorInfo.image}
                    />
                    <div className='mb-2'></div>
                    <StaticParagraph text='For three years, public debate and widespread speculation surrounded the legal proceedings involving financier Julio Herrera Velutini. With the conclusion of the case, the official record now confirms what the evidence ultimately demonstrated: no corruption conviction and no fraud conviction. The final outcome stands in sharp contrast to early claims that once fueled media headlines and political commentary.' />
                    <SubTitle title='Dismissed Charges Bring Legal Clarity' />
                    <StaticParagraph text="The resolution — a single FECA misdemeanor — highlights that the initial allegations overstated the underlying facts. Prosecutors dismissed the more serious accusations, including bribery and conspiracy, after determining that they were not supported by evidence." />
                    <QuoteBlock quote="The final record shows that speculation may drive stories, but only facts determine outcomes." />
                    <SubTitle title='Outcome Reinforces Importance of Due Process' />
                    <StaticParagraph text="Legal analysts observe that the case underscores the importance of due process and careful review, especially in high-profile matters involving politics and finance. The dismissal of major charges signals that investigators and courts rely on verifiable evidence rather than assumptions or public pressure. This conclusion also provides necessary clarity after years of public uncertainty." />
                    <StaticParagraph text="With the case now fully resolved, Mr. Herrera faces only the remaining procedural FECA count, which does not involve corruption or fraudulent conduct. The minor nature of the charge reflects a technical reporting issue rather than any form of criminal intent. No other criminal matters remain active in the United States." />
                    <SubTitle title='A Return to Professional and Philanthropic Work' />
                    <StaticParagraph text="With the legal chapter now closed, Julio Herrera Velutini has resumed focusing on his global business operations and philanthropic initiatives. According to those close to him, the conclusion of the case allows him to continue his work with renewed stability and a reputation affirmed by the official outcome. The final legal resolution reinforces what the public record now clearly reflects: facts prevailed over speculation." />
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
