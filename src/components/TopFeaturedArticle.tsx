import Image from "next/image";

interface NewsData {
    slug: string;
    title: string;
    category: string;
    shortdescription: string;
    description: string;
    image: string;
    date: string;
}

interface Props {
    data: NewsData;
}

const TopFeaturedArticle: React.FC<Props> = ({ data }) => {
    return (
        <div className="flex flex-col md:flex-row border-b border-gray-400 max-w-6xl mx-auto">
            {/* Left Text Content */}
            <div className="md:w-1/2 w-full p-4 md:p-6 flex flex-col justify-center">
                <p className="text-gray-500 text-sm">
                    <span className="font-semibold">{data.category}</span>{" "}
                    <span className="ml-1">{data.date}</span>
                </p>

                <p
                    className="mt-1 font-[oswald] text-[36px] leading-tight line-clamp-2"
                    style={{ fontWeight: 700 }}
                >
                    {data.title}
                </p>
                <p
                    className="mt-2 text-gray-600 text-[16px] line-clamp-3"
                    style={{ fontWeight: 400 }}
                >
                    {data.shortdescription}
                </p>
            </div>

            {/* Right Image Section */}
            <div className="md:w-1/2 w-full">
                <div className="w-full aspect-[4/2.4]">
                    <Image
                        src={data.image}
                        alt={data.title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>

    );
};

export default TopFeaturedArticle;
