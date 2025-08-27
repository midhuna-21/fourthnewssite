import { FaFacebookF, FaInstagram, FaXTwitter, FaVk, FaYoutube } from "react-icons/fa6";
import politicsData from "../../public/data/politics.json";
import Link from "next/link";

const categories = [
  "BUSINESS",
  "SPORTS",
  "POLITICS",
  "HEALTH",
  "TECHNOLOGY",
  "SCIENCE",
  "EDUCATION",
  "ENTERTAINMENT"
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="max-w-7xl mx-auto px-5 mt-5">

        {/* ========== MOBILE VIEW ========== */}
        <div className="block md:hidden space-y-10">
          {/* Logo + Social + Copyright */}
          <div className="text-center">
            <h2 className="text-[24px] font-bold">MIRRORSTANDARD</h2>

          </div>

          {/* Categories (no heading) */}
          <div>
            {/* <h3 className="text-xl font-bold text-yellow-500 mb-4">Popular Category</h3> */}
            <ul className="space-y-2 text-[11px] tracking-widest">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/${category.toLowerCase()}`}
                    title={category}
                    className="hover:text-yellow-500"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editor's Picks */}
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-4 text-center">Editor Picks</h3>
            {[0, 1].map((i) => (
              <Link
                key={i}
                href={`/${politicsData[i].category}/${politicsData[i].slug}`}
                title={politicsData[i].slug}
                className="block w-full"
                style={{ color: "inherit" }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1 pr-4">
                    <p className="text-[12px] font-semibold leading-snug hover:text-yellow-500 cursor-pointer line-clamp-3">
                      {politicsData[i].title}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1">{politicsData[i].date}</p>
                  </div>
                  <img
                    src={politicsData[i].image}
                    alt={politicsData[i].title}
                    className="w-16 h-16 object-cover"
                  />
                </div>
              </Link>
            ))}
            <div >
              <p className="text-[10px] mt-2 leading-tight text-gray-300 text-center">
                © Copyright 2025 , mirrorstandard <br /> All Rights Reserved.
              </p>
              <div className="flex justify-center space-x-5 mt-4 text-lg">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaVk /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>

        {/* ========== DESKTOP VIEW ========== */}
        <div className="hidden md:flex gap-12 flex-wrap">
          {/* Left Side */}
          <div className="w-[300px] lg:w-[380px] flex-shrink-0">
            <h2 className="text-[24px] font-bold">MIRRORSTANDARD</h2>
            <p className="text-[12px] mt-2 leading-tight text-gray-300">
              © Copyright 2025 , mirrorstandard <br /> All Rights Reserved.
            </p>
            <div className="flex space-x-5 mt-6 text-lg">
              {/* <a href="#"><FaFacebookF /></a> */}
              <Link href="https://x.com/MirrorstandardU" title="twitter"><FaXTwitter /></Link>
              <Link href="https://www.instagram.com/mirrorstandardusnews/" title="instagram"><FaInstagram /></Link>
              {/* <a href="#"><FaVk /></a> */}
              <Link href="https://www.youtube.com/@mirrorstandardUS" title="youtube"><FaYoutube /></Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 lg:grid-cols-3 flex-1 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-xl font-bold text-yellow-500 mb-4">About Us</h3>
              <ul className="space-y-2 text-[11px] tracking-widest">
                
                <li><Link href='/about' title="about" className="hover:text-yellow-500">ABOUT</Link></li>
                <li><Link href='/contact' title="contact" className="hover:text-yellow-500">CONTACT</Link></li>
                <li><Link href='/our-team' title="our team" className="hover:text-yellow-500">OUR TEAM</Link></li>
                <li><Link href='/editorial-policy' title="editorial policy" className="hover:text-yellow-500">EDITORIAL POLICY</Link></li>
                <li><Link href='/privacy-policy' title="privacy policy" className="hover:text-yellow-500">PRIVACY POLICY</Link></li>
                <li><Link href='/corrections-policy' title="corrections policy" className="hover:text-yellow-500">CORRECTIONS POLICY</Link></li>
                <li><Link href='/terms-and-conditions' title="terms and conditions" className="hover:text-yellow-500">TERMS AND CONDITIONS</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Popular Category</h3>
              <ul className="space-y-2 text-[11px]">
                {categories.map((category) => (
                  <li key={category}>
                    <Link
                      href={`/${category.toLowerCase()}`}
                      title={category}
                      className="hover:text-yellow-500 tracking-widest"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Editor Picks */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Editor Picks</h3>
              {[0, 1].map((i) => (
                <Link
                  key={i}
                  href={`/${politicsData[i].category}/${politicsData[i].slug}`}
                  title={politicsData[i].slug}
                  className="block w-full"
                  style={{ color: "inherit" }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1 pr-4">
                      <p className="text-[12px] font-semibold leading-snug hover:text-yellow-500 cursor-pointer line-clamp-3">
                        {politicsData[i].title}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-1">{politicsData[i].date}</p>
                    </div>
                    <img
                      src={politicsData[i].image}
                      alt={politicsData[i].title}
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
