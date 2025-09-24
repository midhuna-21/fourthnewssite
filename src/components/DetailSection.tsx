"use client"
import React, { useRef, useEffect, useState } from 'react';
import ArticleDetail from '@/components/ArticleDetail';
import AuthorInfo from '@/components/AuthorInfo';
import ArticleParagraph from '@/components/ArticleParagraph';
import CommentForm from '@/components/CommentForm';
import RelatedNews from '@/components/RelatedNews';
import HorizontalNewsCard from '@/components/HorizontalNewsCard';
import AuthorCard from './AuthorCard';
import NewsNavigation from './NewsNavigation';

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  author: string;
  authorImage: string;
  role: string;
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

      const stopPoint = stopRef.current.getBoundingClientRect().bottom;
      const offset = 20;

      if (window.innerWidth >= 1024) {
        // apply sticky only on large screens
        if (stopPoint - offset <= 0) {
          setRightPosition('absolute');
        } else {
          setRightPosition('sticky');
        }
      } else {
        setRightPosition('absolute'); // disable sticky on tab & mobile
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* On mobile & tablet: 1 column; On large: 3 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {/* Left */}
        <div ref={leftRef} className="lg:col-span-2">
          <ArticleDetail data={article} />
          <AuthorInfo
            name={article.author}
            role={article.role}
            date={article.date}
            image={article.authorImage}
          />
          <ArticleParagraph data={article} />

          <div ref={stopRef}>
            <AuthorCard
              author={article.author}
              role={article.role}
              image={article.authorImage}
            />

            <NewsNavigation data={[otherArticles[0], otherArticles[1]]} />
            <CommentForm />
            <RelatedNews data={[otherArticles[2], otherArticles[3], otherArticles[4]]} />
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-1 relative">
          <div
            ref={rightRef}
            className={`${rightPosition === 'sticky' ? 'sticky top-10' : 'relative'} transition-all duration-500`}
          >
            <h2 className="text-[24px] font-[oswald] mb-4 font-bold">POPULAR NEWS</h2>
            <div className="divide-y divide-[#615e5e54]">
              {data.slice(5, 9).map((item, index) => (
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
