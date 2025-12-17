import Link from "next/link";
import Image from "next/image";
import ShareMenu from "./ShareMenu";
import { FaTwitter, FaInstagram, FaFacebookF, FaMedium } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

interface AuthorProps {
  author: string;
  role: string;
  image: string;
  slug: string;
  articleTitle: string;

  twitter?: string;
  instagram?: string;
  facebook?: string;
  medium?: string;
  substack?: string;
}

const AuthorCard: React.FC<AuthorProps> = ({
  author,
  role,
  image,
  slug,
  articleTitle,
  twitter,
  instagram,
  facebook,
  medium,
  substack,
}) => {
  const socialLinks = [
    { icon: <FaTwitter />, url: twitter },
    { icon: <FaInstagram />, url: instagram },
    { icon: <FaFacebookF />, url: facebook },
    { icon: <FaMedium />, url: medium },
    { icon: <SiSubstack />, url: substack },
  ];

  return (
    <div className="py-8 rounded-lg flex flex-col sm:flex-row items-start justify-between gap-4">
      {/* Left: Author info */}
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <Link href={`/our-team/${slug}`} title={author}>
          <Image
            src={image}
            alt={author}
            width={96}
            height={96}
            className="rounded-full object-cover w-24 h-24"
          />
        </Link>

        <div>
          <p className="uppercase text-[11px] text-gray-500">Written By</p>
          <p className="text-lg font-semibold">{author}</p>
          <p className="text-[14px] text-gray-600 font-bold capitalize">
            {role}
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-3">
            {socialLinks.map(
              (link, idx) =>
                link.url && (
                  <Link
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {link.icon}
                  </Link>
                )
            )}
          </div>
        </div>
      </div>

      <ShareMenu title={articleTitle} />
    </div>
  );
};

export default AuthorCard;
