// components/MainLayout.jsx
import LargeImageSection from "./LargeImageSection";
import RightSidebar from "./RightSidebar";
import SubHeadline from "./SubHeadline";
import SubHeadlineTwo from "./SubHeadlineTwo";

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

const MainLayout: React.FC<Props> = ({ data }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Method 1: Flexbox approach */}
            <div className="h-screen bg-black text-white p-6">
                <div className="flex h-full gap-6">
                    {/* Left: Large Image - Takes 2/3 of width */}
                    <div className="flex-[2] flex flex-col">
                        <SubHeadlineTwo title="News" />
                        <div className="flex-1">
                            <LargeImageSection data={data[0]} />
                        </div>
                    </div>

                    {/* Right: Sidebar - Takes 1/3 of width */}
                    <div className="flex-1 border-l border-gray-700 pl-6 flex flex-col">
                        {/* Fixed header */}
                        <div className="mb-4">
                            <SubHeadlineTwo title="News" />
                        </div>

                        {/* Scrollable content - This will definitely work */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="h-full">
                                <RightSidebar data={[data[1], data[2], data[3], data[4]]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Method 2: CSS Grid alternative (uncomment if flexbox doesn't work) */}
            {/* 
            <div className="h-screen bg-black text-white p-6 grid grid-cols-3 grid-rows-[auto_1fr] gap-6">
                <div className="col-span-2">
                    <SubHeadlineTwo title="News" />
                </div>
                <div className="border-l border-gray-700 pl-6">
                    <SubHeadlineTwo title="News" />
                </div>
                
                <div className="col-span-2">
                    <LargeImageSection data={data[0]} />
                </div>
                <div className="border-l border-gray-700 pl-6 overflow-y-auto">
                    <RightSidebar data={[data[1], data[2], data[3], data[4]]} />
                </div>
            </div>
            */}
        </div>
    );
};

export default MainLayout;