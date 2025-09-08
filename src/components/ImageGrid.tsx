// components/ImageGrid.tsx
import React from "react";
import Image from "next/image";

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Image */}
      <div className="relative w-full h-80 md:h-96">
        <Image
          src="/images/JMHV-museum-london.webp"
          alt="Julio Herrera Velutini"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Image */}
      <div className="relative w-full h-80 md:h-96">
        <Image
          src="/images/julio-remini-enhanced.webp"
          alt="Julio Herrera Velutini"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
