"use client";
import React from "react";
import Image from "next/image";

interface AuthorProps {
  name: string;
  role?: string;
  date: string;
  image: string;
}

const AuthorInfo: React.FC<AuthorProps> = ({ name, role, image, date }) => {
  return (
    <div className="flex items-center space-x-3 py-7">
      {/* Author Image */}
      <div className="w-12 h-12 relative rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          quality={75}
          placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

        />
      </div>
      {/* Author Details */}
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">
          By <span className="font-semibold">{name}</span>
        </p>
        <p className="text-sm text-gray-500">
          Published <span className="font-medium">{date}</span>
        </p>
      </div>
    </div>
  );
};

export default AuthorInfo;
