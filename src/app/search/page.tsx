"use client";
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HorizontalNewsCard from "../../components/HorizontalNewsCard";
import CategoryLeftSection from "../../components/CategoryLeftSection";
import NotFoundPage from "@/components/NotFoundPage";

import businessData from "../../../public/data/business.json";
import sportsData from "../../../public/data/sports.json";
import educationData from "../../../public/data/education.json";
import healthData from "../../../public/data/health.json";
import politicsData from "../../../public/data/politics.json";
import technologyData from "../../../public/data/technology.json";
import scienceData from "../../../public/data/science.json";
import entertainmentData from "../../../public/data/entertainment.json";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const allArticles = [
    ...businessData,
    ...sportsData,
    ...educationData,
    ...healthData,
    ...politicsData,
    ...technologyData,
    ...scienceData,
    ...entertainmentData,
  ];

  const filteredArticles = allArticles.filter(
    (article) => article.category.toLowerCase() === query
  );

  const hasResults = filteredArticles.length > 0;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for Category: <span>{query}</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          {hasResults ? (
            <CategoryLeftSection data={filteredArticles.slice(0, 9)} />
          ) : (
            <NotFoundPage />
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <h2 className="text-xl font-bold mb-4">POPULAR POSTS</h2>
            <div className="divide-y divide-gray-300">
              {businessData.slice(0, 4).map((item, idx) => (
                <div key={idx} className="py-3">
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

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading search results...</div>}>
      <SearchContent />
    </Suspense>
  );
}
