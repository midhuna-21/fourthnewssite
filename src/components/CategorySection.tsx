"use client"
import React, { useEffect, useRef, useState } from 'react';
import CategoryLeftSection from '@/components/CategoryLeftSection';
import HorizontalNewsCard from '@/components/HorizontalNewsCard';

interface NewsData {
    slug:string;
    title:string;
    category:string;
    shortdescription:string;
    description:string;
    date:string;
    image:string;
}

interface Props {
    data:NewsData[];
}

export default function CategorySection({ data }: Props) {
  const leftEndRef = useRef<HTMLDivElement>(null);
  const [stickyEnd, setStickyEnd] = useState(false);

  useEffect(() => {
    if (!leftEndRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStickyEnd(entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    observer.observe(leftEndRef.current);

    return () => observer.disconnect();
  }, []);

  return (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* Left Section */}
  <div className="lg:col-span-2 space-y-6">
    <CategoryLeftSection data={data.slice(0, 9)} />
  </div>

  {/* Right Section */}
  <div className="lg:col-span-1">
    <div className="sticky top-10">
      <h2 className="text-[24px] font-[oswald] uppercase mb-4" style={{fontWeight:700}}>Trending News</h2>
      <div className="divide-y divide-gray-[#313030]]">
        {data.slice(9, 13).map((item, idx) => (
          <div key={idx} className="py-3">
            <HorizontalNewsCard data={item} />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}
