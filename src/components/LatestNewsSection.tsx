import LifestyleCard from "./LifeStyleCard";
import SubHeadline from "./SubHeadline";

interface NewsData {
    slug: string;
    title: string;
    category: string;
    shortdescription: string;
    description: string;
    date: string;
    image: string;
}

interface Props {
    data: NewsData[];
}

const LatestNewsSection: React.FC<Props> = ({ data }) => {
    return (
    <div className="container mx-auto px-4 py-8">
        <SubHeadline title="Latest News" />
        <div className="flex flex-col sm:flex-row gap-8 conatiner mt-5">
            <LifestyleCard data={data[0]} />
            <LifestyleCard data={data[1]} />
        </div>
        </div>
    );
};

export default LatestNewsSection;
