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

export default function JulioPageSix({ otherArticles }: Props) {

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
            title="Civil Lawsuit Withdrawn — No Judgment, No Liability"
            description="Kasowitz LLP voluntarily dismissed its lawsuit against Julio Herrera Velutini, ending the matter without settlement or liability."    
            image='/images/julio-herrera-velutini-civil-case-withdrawn.webp' />

          <AuthorInfo
            name={authorInfo.name}
            role={authorInfo.role}
            date={authorInfo.date}
            image={authorInfo.image}
          />
          <div className='mb-2'></div>
        <StaticParagraph text='In a separate civil matter running parallel to the criminal case, Kasowitz LLP voluntarily dismissed its lawsuit against Julio Herrera Velutini on August 27, 2025. The timing coincided directly with the resolution of the related criminal matter, bringing an abrupt and definitive end to the civil dispute.'/>
       <StaticParagraph text="Court filings show that the lawsuit was withdrawn without any settlement, judgment, or admission of liability. Judge Sidney H. Stein formally signed the dismissal order within just three days of the case being filed, reflecting the rapid conclusion of the matter. The withdrawal leaves no claims pending and no legal findings against Mr. Herrera."/>
     <StaticParagraph text="The brief lifespan of the civil case is viewed as notable, given the attention the filing initially garnered. With the voluntary dismissal, the dispute concludes with no obligations, penalties, or continuing issues for any of the parties involved. The court’s quick approval of the withdrawal further underscores the finality of the outcome."/>
      <StaticParagraph text="Observers note that this action mirrors the outcome in the criminal proceedings, where major allegations were dismissed and only a minor FECA issue remained. In both arenas, the results show the absence of any sustained claims or liability against Mr. Herrera. The civil withdrawal reinforces that the allegations introduced in the filing did not proceed into litigation."/>
       <StaticParagraph text="With both legal fronts now fully resolved, Mr. Herrera moves forward with no active civil or criminal matters pending against him. The end of the civil case confirms complete closure, signaling that all legal disputes tied to these filings have officially concluded."/>
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
