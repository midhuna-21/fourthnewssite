import Image from "next/image";
import picture from '../../public/images/author-image.webp';

interface AuthorProps {
  author: string;
  role: string;
  image: string;
}

const AuthorCard: React.FC<AuthorProps> = ({ author, role, image }) => {
  return (
    <div className="py-8 rounded-lg flex flex-col sm:flex-row items-start gap-4">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={author}
          width={96}
          height={96}
          quality={75}
          placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

          className="rounded-full object-cover w-24 h-24"
        />
      </div>

      {/* Author Details */}
      <div className="text-left">
        <p className="uppercase text-[11px] mb-1">
          Written By
        </p>
        <p className="text-lg font-semibold">{author}</p>
        <p className="text-[14px] md:text-[14px] text-gray-600 capitalize" style={{ fontWeight: 700 }}>
          {role}
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
