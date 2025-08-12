import LifestyleCard from "./LifeStyleCard";

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
        <div className="flex flex-col sm:flex-row gap-4 conatiner">
            <LifestyleCard data={data[0]} />
            <LifestyleCard data={data[1]} />
        </div>
        </div>
    );
};

export default LatestNewsSection;
