import React from 'react';
import { notFound } from 'next/navigation';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import healthData from '../../../../public/data/health.json';
import politicsData from '../../../../public/data/politics.json';
import scienceData from '../../../../public/data/science.json';
import entertainmentData from '../../../../public/data/entertainment.json'
import educationData from '../../../../public/data/education.json';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ArticleDetail from '@/components/ArticleDetail';
import AuthorInfo from '@/components/AuthorInfo';
import ArticleParagraph from '@/components/ArticleParagraph';
import CommentForm from '@/components/CommentForm';
import RelatedNews from '@/components/RelatedNews';
import HorizontalNewsCard from '@/components/HorizontalNewsCard';
import DetailSection from '@/components/DetailSection';

export async function generateStaticParams() {
    const allData = [
        { category: 'politics', articles: politicsData },
        { category: 'business', articles: businessData },
        { category: 'technology', articles: technologyData },
        { category: 'sports', articles: sportsData },
        { category: 'science', articles: scienceData },
        { category: 'health', articles: healthData },
        { category: 'entertainment', articles: entertainmentData },
        { category: 'education', articles: educationData },

    ];

    const params = allData.flatMap(({ category, articles }) =>
        articles.map((article) => ({
            category,
            slug: article.slug,
        }))
    );

    return params;
}


interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    image: string;
    slug: string;
    date: string;
}

interface DetailPageProps {
    params: Promise<{ category: string, slug: string }>;
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


export default async function DetailPage({ params }: DetailPageProps) {
    const { category, slug } = await params;
    const data = allData[category?.toLowerCase()];

    if (!data) return notFound();

    const article = data.find(item => item.slug === slug);
    if (!article) {
        return <div className="p-4">No article found for slug {slug}</div>;
    }

    const otherArticles = data.filter(item => item.slug !== slug);

    return (
       <div>
      {/* Navbar only on large screens */}
      <div className="hidden lg:block">
        <Navbar />
      </div>

      {/* Content with proper responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 mt-5 md:px-8 lg:px-12 xl:px-16 mb-12">
        <DetailSection article={article} otherArticles={otherArticles} data={data} />
      </div>
    </div>
    );
}