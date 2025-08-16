import React from 'react';
import businessData from '../../../public/data/business.json';
import technologyData from '../../../public/data/technology.json';
import sportsData from '../../../public/data/sports.json';
import healthData from '../../../public/data/health.json';
import politicsData from '../../../public/data/politics.json';
import scienceData from '../../../public/data/science.json';
import entertainmentData from '../../../public/data/entertainment.json';
import educationData from '../../../public/data/education.json';
import CategoryHeader from '@/components/CategoryHeader';
import Navbar from '@/components/Navbar';
import CategoryLeftSection from '@/components/CategoryLeftSection';
import HorizontalNewsCard from '@/components/HorizontalNewsCard';

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

const allData: Record<string, NewsItem[]> = {
  business: businessData,
  technology: technologyData,
  sports: sportsData,
  health: healthData,
  politics: politicsData,
  science: scienceData,
  entertainment: entertainmentData,
  education: educationData,
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = allData[category];

  if (!data) {
    return (
      <div className="container py-5">
        <h2>Category not found</h2>
      </div>
    );
  }

  return (
 <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb + Title */}
        <CategoryHeader category="Media" />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Left Section (Articles) */}
          <div className="lg:col-span-2 space-y-6">
            <CategoryLeftSection
              data={[data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8]]}
            />
          </div>

          {/* Right Section (Popular Posts) */}
        <div className="lg:col-span-1">
  <h2 className="text-xl font-bold mb-4">POPULAR POSTS</h2>
  <div className="divide-y divide-gray-300">
    <div className="py-3">
      <HorizontalNewsCard data={data[9]} />
    </div>
    <div className="py-3">
      <HorizontalNewsCard data={data[10]} />
    </div>
    <div className="py-3">
      <HorizontalNewsCard data={data[11]} />
    </div>
    <div className="py-3">
      <HorizontalNewsCard data={data[12]} />
    </div>
  </div>
</div>

        </div>
      </div>
      </>
  );
}