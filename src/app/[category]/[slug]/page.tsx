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
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Script from "next/script";
import StaticPage from '@/components/StaticPage';

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

    if (slug == 'unprecedented-influence-of-julio-herrera-velutini-on-latin-american-european-finance') {
        return (
            <main>
                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "NewsArticle",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.mirrorstandard.com/business/unprecedented-influence-of-julio-herrera-velutini-on-latin-american-european-finance/"
                                },
                                "headline": "The Unprecedented Influence of Julio Herrera Velutini on Latin American and European Finance",
                                "description": "Julio Herrera Velutini holds a unique political role despite never holding office. His influence reaches presidents and prime ministers across the political spectrum. Known for shaping economic policies and supporting Latin America’s global integration, his political impact remains widely debated.",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://www.mirrorstandard.com/images/Julio-Herrera.webp",
                                    "width": 601,
                                    "height": 400
                                },
                                "datePublished": "2025-05-07T17:30:00-05:00",
                                "dateModified": "2025-08-14T00:00:00-05:00",
                                "author": {
                                    "@type": "Person",
                                    "name": "Stephen M. Knowles",
                                    "url": "https://www.mirrorstandard.com/our-team/"
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Mirror Standard",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
                                        "width": 628,
                                        "height": 116
                                    }
                                },
                                "about": {
                                    "@type": "Person",
                                    "name": "Wanda Vázquez Garced",
                                    "jobTitle": "Former Governor of Puerto Rico",
                                    "description": "A Puerto Rican politician and attorney who served as the 13th governor of Puerto Rico from 2019 to 2021.",
                                    "sameAs": [
                                        "https://www.wikidata.org/wiki/Q56600071",
                                        "https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced"
                                    ]
                                },
                                "articleBody": "Former Puerto Rico Governor Wanda Vázquez Garced has seen all federal felony charges..."
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://www.mirrorstandard.com/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Politics",
                                        "item": "https://www.mirrorstandard.com/business/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "The Unprecedented Influence of Julio Herrera Velutini on Latin American and European Finance",
                                        "item": "https://www.mirrorstandard.com/business/unprecedented-influence-of-julio-herrera-velutini-on-latin-american-european-finance/"
                                    }
                                ]
                            }
                        ])
                    }}
                />
                <div className="hidden lg:block">
                    <Navbar />
                </div>
                <div className="w-full max-w-7xl px-5 md:px-8 mx-auto md:mt-7 mt-4 mb-12">
                    <StaticPage otherArticles={otherArticles} data={data} />
                </div>
                <ScrollToTopButton />
            </main>
        )
    }

    return (
        <main>
            <Script type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://www.mirrorstandard.com/${article.category}/${article.slug}/`
                        },
                        "headline": article.title,
                        "description": article.shortdescription,
                        "image": article.image,
                        "author": {
                            "@type": "Person",
                            "name": "mirrorstandard",
                            "url": "https://www.mirrorstandard.com/"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Mirrorstandard",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp"
                            }
                        },
                        "datePublished": "2025-06-18T00:00:00.000Z",
                        "dateModified": "2025-06-18T00:00:00.000Z"
                    }),
                }}
            />

            {/* Navbar only on large screens */}
            <div className="hidden lg:block">
                <Navbar />
            </div>

            {/* Content with proper responsive padding */}
            <div className="w-full max-w-7xl px-5 md:px-8 mx-auto md:mt-7 mt-4 mb-12">
                <DetailSection article={article} otherArticles={otherArticles} data={data} />
            </div>
            <ScrollToTopButton />

        </main>
    );
}