import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NewsFirstLayout from "@/components/NewsFristLayout";
import Image from "next/image";
import businessData from '../../public/data/business.json';
import healthData from '../../public/data/health.json';
import scienceData from '../../public/data/science.json';
import politicsData from '../../public/data/politics.json';
import educationData from '../../public/data/education.json';
import sportsData from '../../public/data/sports.json';
import technologyData from '../../public/data/technology.json';
import entertainmentData from '../../public/data/entertainment.json';
import SecondArticle from "@/components/SecondArticle";
import ArticleLayout from "@/components/ArticleLayout";
import ArticlesGrid from "@/components/ArticlesGrid";
import LatestNewsSection from "@/components/LatestNewsSection";
import FourCardGrid from "@/components/FourCardGrid";
import MoreTopHeadlines from "@/components/MoreTopHeadlines";
import ExclusiveClips from "@/components/ExclusiveClips";
import MainLayout from "@/components/MainLayout";
import EntertainmentSection from "@/components/Entertainment";
import ScrollLayout from "@/components/ScrollLayout";
import PromoNews from "@/components/PromoNews";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>

<div className="w-full max-w-7xl px-8 mx-auto">
      <NewsFirstLayout data={[businessData[3], healthData[1], scienceData[8], politicsData[16], educationData[26], technologyData[0], sportsData[0], businessData[0], educationData[0], businessData[1]]} />

      <ArticleLayout data={[politicsData[0], politicsData[1], politicsData[2], politicsData[3], politicsData[4], politicsData[5]]} />

      <ArticlesGrid data={[educationData[1], scienceData[1], technologyData[4], educationData[3]]} />

      <LatestNewsSection data={[politicsData[0], healthData[6]]} />

      <FourCardGrid data={[healthData[0], scienceData[2], sportsData[2], educationData[11]]} />

      {/* <PromoNews /> */}

      <MoreTopHeadlines data={[sportsData[9], educationData[1], politicsData[3], sportsData[3], technologyData[3], educationData[5], businessData[8], healthData[7], educationData[9], sportsData[9], sportsData[10]]} />

      <ExclusiveClips data={[entertainmentData[9], healthData[8], sportsData[4], technologyData[8], politicsData[4], educationData[14], businessData[2], entertainmentData[2], businessData[4], entertainmentData[1], entertainmentData[0]]} />

      <MainLayout data={[politicsData[12], educationData[19], healthData[10], sportsData[10], educationData[16]]} />

      <EntertainmentSection data={[healthData[28], healthData[21], healthData[2], healthData[3], healthData[4]]} />

      <ScrollLayout data={[politicsData[11], sportsData[22], businessData[22], technologyData[20], educationData[4], healthData[24], scienceData[5], politicsData[27], scienceData[15], scienceData[16], scienceData[18],entertainmentData[19],entertainmentData[18],entertainmentData[20],technologyData[28]]} />
     <ScrollToTopButton />
   </div>

    </div>
  );
}




