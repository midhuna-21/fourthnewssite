"use client"
import React, { useRef, useEffect, useState } from 'react';
import ArticleDetail from '@/components/ArticleDetail';
import AuthorInfo from '@/components/AuthorInfo';
import ArticleParagraph from '@/components/ArticleParagraph';
import CommentForm from '@/components/CommentForm';
import RelatedNews from '@/components/RelatedNews';
import HorizontalNewsCard from '@/components/HorizontalNewsCard';
import PromoNews from './PromoNews';

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
  article: NewsItem;
  otherArticles: NewsItem[];
  data: NewsItem[];
}

export default function DetailSection({ article, otherArticles, data }: Props) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const stopRef = useRef<HTMLDivElement>(null);
  const [rightPosition, setRightPosition] = useState<'sticky' | 'absolute'>('sticky');

  useEffect(() => {
    const handleScroll = () => {
      if (!leftRef.current || !stopRef.current || !rightRef.current) return;

      const stopPoint = stopRef.current.getBoundingClientRect().bottom; // bottom of comment form
      const offset = 20; // same as sticky top

      if (stopPoint - offset <= 0) {
        // left section finished scrolling
        setRightPosition('absolute'); // right section stops sticking
      } else {
        setRightPosition('sticky');
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {/* Left */}
        <div ref={leftRef} className="lg:col-span-2">
          <ArticleDetail data={article} />
          <AuthorInfo
            name="Vibenews Staff"
            role="Editor"
            date={article.date}
            image=""
          />
          <ArticleParagraph data={article} />

          <div ref={stopRef}>
                 {/* <PromoNews /> */}
            <CommentForm />
            <RelatedNews data={otherArticles} />
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-1 relative">
          <div
            ref={rightRef}
            className={`${rightPosition === 'sticky' ? 'sticky top-10' : 'absolute bottom-0'} transition-all duration-500`}
          >
            <h2 className="text-[24px] font-[oswald] mb-4" style={{fontWeight:700}}>POPULAR NEWS</h2>
            <div className="divide-y divide-[#313030]">
              {data.slice(0, 4).map((item, index) => (
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