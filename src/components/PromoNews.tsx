import Image from "next/image";
import picture from "../../public/images/ads-full.png";

export default function PromoNews() {
  return (
    <div className="container mx-auto px-5 py-8 mt-24 mb-24 relative w-full h-64"> 
      <Image
        src={picture}
        alt="Promotional News Banner"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
