"use client";
import React from "react";
import Image from "next/image";
import picture from '../../public/images/julio.webp'

export default function JulioFirstSection() {
    return (
        <div>
            <p className="text-gray-500">
                <span className="font-semibold text-[16px] capitalize sm:text-[18px] md:text-[18px]">
                    Business
                </span>{" "}
                •{" "}
                <span className="text-[12px] sm:text-[14px] md:text-[14px]">
                    Oct. 3, 2025
                </span>{" "}
            </p>
            <h1
                className="font-[oswald] font-bold mb-2 text-[20px] sm:text-[24px] md:text-[30px] leading-tight sm:leading-[1.2] md:leading-[1.1]"
            >
                Julio Herrera Velutini: A Legal Resolution with Integrity Restored  </h1>
            <p className="mb-6 text-[12px] sm:text-[14px] md:text-[17px] text-gray-500 leading-tight italic">
                All legal matters have been resolved with no corruption or fraud convictions, as Julio Herrera Velutini moves forward with clarity and focus.</p>
            <div className="w-full relative overflow-hidden shadow-md aspect-[16/9] sm:aspect-[16/9] md:aspect-video">
                <Image
                    src={picture}
                    alt='julio herrera velutini'
                    fill
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
};

