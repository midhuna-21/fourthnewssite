"use client";
import React from "react";
import Image from "next/image";
import picture from '../../public/images/author.jpg'

interface AuthorProps {
  name: string;
  role?: string;
  date: string;
  // image: string;
}

const AuthorInfo: React.FC<AuthorProps> = ({ name, role = "Staff", date }) => {
  return (
    <div className="flex items-center space-x-3 mt-6 mb-5">
      {/* Author Image */}
      <div className="w-12 h-12 relative rounded-full overflow-hidden">
        <Image
          src={picture}
          alt="Author"
          width={48}
          height={48}
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
