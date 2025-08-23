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
        <div>
            {paragraphs.map((text, index) => (
                <p
                    key={index}
                    className="text-[17px] leading-tight mb-5"style={{fontWeight:400,fontFamily:'Roboto, sans-serif'}}
                >
                    {text}
                </p>
            ))}
        </div>
    );
};

export default ArticleParagraphWith;
