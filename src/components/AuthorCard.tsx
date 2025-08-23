import Image from "next/image";
import picture from '../../public/images/author.jpg';

// interface AuthorProps {
//   name: string;
//   role?: string;
//   bio: string;
//   image: string;
// }

const AuthorCard: React.FC= () => {
  return (
    <div className="py-8 rounded-lg flex flex-col sm:flex-row items-start gap-4">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <Image
          src={picture}
          alt='mirror standard'
          width={96}
          height={96}
          className="rounded-full object-cover w-24 h-24"
        />
      </div>

      {/* Author Details */}
      <div className="text-left">
        <p className="uppercase text-xs mb-1">
          Written By
        </p>
        <h3 className="text-lg font-semibold">Mirrorstandard Staff</h3>
        <p className="text-[14px] md:text-[14px] leading-tight">
          All the design inspiration you need. It's like crack for designers. And good for you too! Even though I still hated planks at the end, my core felt tighter after doing them.
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
