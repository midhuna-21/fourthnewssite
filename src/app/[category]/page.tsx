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
import CategorySection from '@/components/CategorySection';
import Breadcrumb from '@/components/Breadcrump';

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
      <div className="hidden lg:block">
        <Navbar />
      </div>

      <div className="w-full max-w-7xl px-8 mx-auto py-8">
        {/* <Breadcrumb /> */}
        <CategoryHeader category={category} />

        <CategorySection data={data} />
      </div>
    </>
  );
}