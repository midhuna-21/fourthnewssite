import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NewsFirstLayout from "@/components/NewsFristLayout";
import Image from "next/image";
import businessData from '../../public/data/business.json';
import healthData from '../../public/data/health.json';
import scienceData from '../../public/data/science.json';
import politicsData from '../../public/data/politics.json';
import educationData from '../../public/data/education.json';
import SecondArticle from "@/components/SecondArticle";
import ArticleLayout from "@/components/ArticleLayout";
import ArticlesGrid from "@/components/ArticlesGrid";
import LatestNewsSection from "@/components/LatestNewsSection";
import FourCardGrid from "@/components/FourCardGrid";


export default function Home() {
  return (
    <div>
    <Navbar />
    <NewsFirstLayout data={[businessData[0],businessData[1],businessData[2],businessData[3],businessData[4],businessData[5],businessData[6],businessData[7],educationData[21],businessData[9],businessData[10]]}/>
    <ArticleLayout data={[politicsData[0],politicsData[1],politicsData[2],politicsData[3],politicsData[4],politicsData[5]]}/>
    <ArticlesGrid data={[educationData[0],educationData[1],educationData[2],educationData[3]]} />
    <LatestNewsSection data={[scienceData[0],scienceData[1]]}/>
    <FourCardGrid data={[healthData[0],healthData[1],healthData[2],healthData[3]]} />
    </div>
  );
}
