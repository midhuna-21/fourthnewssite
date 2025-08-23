// // components/Footer.tsx
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-gray-300 px-6 md:px-16 p-12">
//       {/* Top Section: Logo + Social */}
//      <div className="flex flex-col items-start justify-between border-b border-gray-700 pb-6">
//   {/* Logo */}
//     <span className=" text-[#ffffff] italic text-lg sm:text-3xl font-black">
//     MIRRORSTANDARD
//   </span>

//   {/* Social Icons */}
//   <div className="flex space-x-6 mt-4 text-white">
//     <Facebook className="w-6 h-6  cursor-pointer" />
//     <Twitter className="w-6 h-6 cursor-pointer" />
//     <Instagram className="w-6 h-6 cursor-pointer" />
//     <Linkedin className="w-6 h-6 cursor-pointer" />
//   </div>
// </div>


//       {/* Middle Section: Links */}
//       <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-10 text-sm">
//         {/* About */}
//         <div>
//           <h3 className="font-[oswald] text-white text-[21px] mb-4" style={{fontWeight:700}}>ABOUT</h3>
//           <ul className="space-y-1 text-[16px]" style={{fontFamily:"Roboto, sans-serif",color:"#c6c6c6"}}>
//             <li>About US</li>
//             <li>Contact Us</li>
//             <li>Feedback</li>
//             <li>Privacy Policy</li>
//             <li>Cookies</li>
//             <li>Advertise</li>
//           </ul>
//         </div>

//         {/* Sections */}
//         <div>
//           <h3 className="font-[oswald] text-white text-[21px] mb-4" style={{fontWeight:700}}>SECTIONS</h3>
//           <ul className="space-y-1 text-[16px]" style={{fontFamily:"Roboto, sans-serif",color:"#c6c6c6"}}>
//             <li>Business</li>
//             <li>Sports</li>
//             <li>Politics</li>
//             <li>Technology</li>
//             <li>Health</li>
//             <li>Science</li>
//             <li>Education</li>
//             <li>Entertainment</li>
//           </ul>
//         </div>


//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-700 pt-4 text-xs flex flex-col md:flex-row justify-between items-center text-gray-400">
//         <p>
//           © Copyright <span className="font-bold text-white">MIRRORSTANDARD</span> 2023. All Rights Reserved.
//         </p>
//         <div className="flex space-x-4 mt-2 md:mt-0">
//           <a href="#">Terms of Use</a>
//           <a href="#">Privacy Policy</a>
//           <a href="#">Buy Theme</a>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { FaFacebookF, FaInstagram, FaXTwitter, FaVk, FaYoutube } from "react-icons/fa6";
import politicsData from '../../public/data/politics.json';
import Link from "next/link";

const categories = [
  "BUSINESS",
  "SPORTS",
  "POLITICS",
  "TECHNOLOGY",
  "HEALTH",
  // "SCIENCE",
  // "EDUCATION",
  // "ENTERTAINMENT",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">

        {/* Left Side */}
        <div className="w-full md:w-[380px] flex-shrink-0">
          <h2 className="text-[24px] font-bold text-center md:text-start">MIRRORSTANDARD</h2>
          <p className="text-sm mt-2 leading-tight text-gray-300">
            © Munich, LLC. All rights reserved. <br />
            MIRRORSTANDARD® is a registered <br /> U.S. trademark of tagDiv, LLC.
          </p>

          {/* Social Icons */}
          <div className="flex md:justify-start justify-center md:items-start items-center space-x-5 mt-6 text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaVk /></a>
            <a href="#"><FaYoutube /></a>
          </div>

        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-1 gap-4 md:gap-8">

          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-4 md:text-start text-center">About Us</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-yellow-500">ABOUT</a></li>
              <li><a href="#" className="hover:text-yellow-500">CONTACT</a></li>
              <li><a href="#" className="hover:text-yellow-500">OUR TEAM</a></li>
              <li><a href="#" className="hover:text-yellow-500">EDITORIAL POLICY</a></li>
              <li><a href="#" className="hover:text-yellow-500">CORRECTION POLICY</a></li>
              <li><a href="#" className="hover:text-yellow-500">TERMS AND CONDITIONS</a></li>
            </ul>
          </div>

          {/* Popular Category */}
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-4 md:text-start text-center">
              Popular Category
            </h3>
            <ul className="space-y-3 text-sm md:text-start text-center">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/${category.toLowerCase()}`}
                    className="hover:text-yellow-500"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Editor Picks */}
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-4 md:text-start text-center">Editor Picks</h3>
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1 pr-4">
                <p className="text-[12px] font-semibold leading-snug hover:text-yellow-500 cursor-pointer line-clamp-3">
                  {politicsData[0].title}
                </p>
                <p className="text-[11px] text-gray-400 mt-1">{politicsData[0].date}</p>
              </div>
              <img
                src={politicsData[0].image}
                alt={politicsData[0].title}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <p className="text-[12px] font-semibold leading-snug hover:text-yellow-500 cursor-pointer line-clamp-3">
                  {politicsData[1].title}
                </p>
                <p className="text-[11px] text-gray-400 mt-1">{politicsData[1].date}</p>
              </div>
              <img
                src={politicsData[1].image}
                alt={politicsData[1].title}
                className="w-16 h-16 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>



  );
}
