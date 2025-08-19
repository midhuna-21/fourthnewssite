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

    const MoreFeaturedArticle: React.FC<Props> = ({ data }) => {
        return (
            <div className="flex flex-col md:flex-row border-b border-[#313030] max-w-6xl mx-auto min-h-[340px]">
                {/* Left Image */}
                <div className="md:w-6/12 w-full">
                    <Image
                        src={data.image}
                        alt={data.title}
                        width={900}
                        height={700}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Text Content */}
                <div className="md:w-6/12 w-full flex flex-col justify-center p-6">
                <p style={{ color: '#838383' }}>
                <span className="text-[18px]" style={{fontWeight:700,fontFamily:'Roboto, sans-serif'}}>{data.category}</span>{" "}
                <span className="ml-1 text-[12px]"style={{fontFamily:'Roboto, sans-serif'}}>{data.date}</span>
            </p>

                    <p
                        className="mt-2 font-[oswald] text-[36px] leading-tight line-clamp-3"
                        style={{ fontWeight: 700 }}
                    >
                        {data.title}
                    </p>
                    <p
                        className="mt-3 text-[16px] leading-tight line-clamp-3"
                        style={{ fontWeight: 400, color: "#b0b0b0" }}
                    >
                        {data.shortdescription}
                    </p>
                </div>
            </div>
        );
    };

    export default MoreFeaturedArticle;
