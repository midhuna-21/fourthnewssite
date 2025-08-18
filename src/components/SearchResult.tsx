"use client";

import { useSearchParams } from "next/navigation";
import HorizontalNewsCard from "./HorizontalNewsCard";
import CategoryLeftSection from "./CategoryLeftSection";

// Import all your data
import businessData from '../../public/data/business.json';
import sportsData from '../../public/data/sports.json';
import educationData from '../../public/data/education.json';
import healthData from '../../public/data/health.json';
import politicsData from '../../public/data/politics.json';
import technologyData from '../../public/data/technology.json';
import scienceData from '../../public/data/science.json';
import entertainmentData from '../../public/data/entertainment.json';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  // Combine all your article data arrays
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

  // Filter articles based on query
  const filteredArticles = allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
  );

  return (
    <div className="container mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for: <span className="text-[#00ffc8]">{query}</span>
      </h1>

      {filteredArticles.length === 0 && (
        <p className="text-gray-400 text-xl">No results found.</p>
      )}

      {filteredArticles.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            <CategoryLeftSection data={filteredArticles.slice(0, 9)} />
          </div>

          {/* Right Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <h2 className="text-xl font-bold mb-4">POPULAR POSTS</h2>
              <div className="divide-y divide-gray-300">
                {filteredArticles.slice(9, 13).map((item, idx) => (
                  <div key={idx} className="py-3">
                    <HorizontalNewsCard data={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
