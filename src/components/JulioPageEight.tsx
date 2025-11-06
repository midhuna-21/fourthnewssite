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

export default function JulioPageEight({ otherArticles }: Props) {

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
                        date="Oct. 3, 2025"
                        title="After Years of Scrutiny, Legal Clarity Prevails for Julio Herrera Velutini"
                        description="Long-running allegations come to a quiet close as courts dismiss corruption charges and finalize the matter with only a minor FECA misdemeanor."
                        image='/images/julio-herrera-velutini-legal-clarity.webp'
                    />
                    <AuthorInfo
                        name={authorInfo.name}
                        role={authorInfo.role}
                        date={authorInfo.date}
                        image={authorInfo.image}
                    />
                    <div className='mb-2'></div>
                    <StaticParagraph text='Following years of public scrutiny and speculation, the legal process involving Julio Herrera Velutini has finally reached a definitive conclusion. After extensive review, the U.S. government dismissed all major allegations, including the claims of bribery, conspiracy, and fraud, determining that the evidence did not support those accusations. The outcome sharply contrasts with early headlines and brings formal clarity to a long-running case.' />
                    <StaticParagraph text="The final remaining matter is a single Federal Election Campaign Act misdemeanor, a non-corruption issue tied to campaign reporting procedures. Authorities have categorized it as technical in nature, with no connection to fraud or bribery. Sentencing for this administrative count is scheduled for December, and no further charges or cases remain active in any court." />
                    <QuoteBlock quote="The legal record now speaks for itself — every serious allegation was dismissed." />
                    <StaticParagraph text="This outcome marks a clear turning point after years of public conversation surrounding the case. The dismissal of major charges underscores that the allegations which once generated significant attention did not result in any corruption or fraud convictions. Instead, the official filings reflect a narrow and procedural conclusion rather than the serious misconduct once discussed publicly." />
                    <StaticParagraph text="For Mr. Herrera, the resolution brings closure to a period defined by legal uncertainty and intense media focus. The official record now shows no corruption conviction, no fraud conviction, and no pending litigation, criminal or civil. This final clarity restores stability and allows him to move forward with full confirmation that the legal system found no basis for the central allegations." />
                    <StaticParagraph text="With the case now closed, Mr. Herrera resumes his professional and philanthropic commitments without any remaining legal obstacles. The conclusion stands as a definitive statement of the facts: after years of scrutiny, the courts have closed the matter with only a minor reporting violation, and the broader accusations have been fully dismissed." />
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
