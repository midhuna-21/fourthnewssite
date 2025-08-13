import SubHeadline from "./SubHeadline";
import NewsCard from "./NewsCard";
import FeaturedArticle from "./FeaturedArticle";
import OverlayArticleCard from "./OverlayArticleCard";
import HorizontalNewsCard from "./HorizontalNewsCard";
import SecondArticle from "./SecondArticle";
import MoreFeaturedArticle from "./MoreFeaturedArticle";
import NewsHeadline from "./NewsHeadline";
import TopFeaturedArticle from "./TopFeaturedArticle";
import TopHorizontalCard from "./TopHorizontalCard";
import TopNewsCard from "./TopNewsCard";


interface NewsData {
    slug: string;
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    date: string;
    image: string;
}

interface Props {
    data: NewsData[];
}

const ExclusiveClips: React.FC<Props> = ({ data }) => {
    return (
        <div className="container mx-auto px-4 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
                <div className="lg:col-span-4 space-y-3">
                    <SubHeadline title="More Top Headlines" />
                    <div className="border-b border-gray-400 pb-2 pr-3">
                        <TopHorizontalCard data={data[1]} />
                    </div>
                    <div className="border-b border-gray-400 pb-2 pt-2 pr-3">
                        <TopHorizontalCard data={data[1]} />
                    </div>
                    <div className="border-b border-gray-400 pb-2 pt-2 pr-3">
                        <TopHorizontalCard data={data[1]} />
                    </div>
                    <div className="pt-2 pr-3">
                        <TopHorizontalCard data={data[1]} />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-8">
                    <TopFeaturedArticle data={data[8]} />
                    <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-8 gap-6">
                        <div className="lg:col-span-4 mt-5">
                            <TopNewsCard data={data[0]} />
                        </div>
                        <div className="lg:col-span-4 border-gray-300 mt-5">
                            {data.slice(6, 9).map((item, i) => (
                                <NewsHeadline key={i} data={item} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default ExclusiveClips;