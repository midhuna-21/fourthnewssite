import React from "react";

interface ArticleParagraphProps {
    data: {
        description?: string;
        date: string;
    };
}

const ArticleParagraphWith = ({ data }: ArticleParagraphProps) => {
    const description = data.description ?? "";
    if (!description) return null;

    const sentences = description.split(". ");
    const paragraphs: string[] = [];

    for (let i = 0; i < sentences.length; i += 3) {
        const chunk = sentences.slice(i, i + 3).join(". ") + ".";
        paragraphs.push(chunk);
    }

    return (
        <div className="px-4">
            {paragraphs.map((text, index) => (
                <p
                    key={index}
                    className="font-roboto text-[17px] font-normal leading-relaxed mb-5 text-justify"
                >
                    {text}
                </p>
            ))}
        </div>
    );
};

export default ArticleParagraphWith;
