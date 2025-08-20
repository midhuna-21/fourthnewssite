// components/Footer.tsx
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-16 p-12">
      {/* Top Section: Logo + Social */}
     <div className="flex flex-col items-start justify-between border-b border-gray-700 pb-6">
  {/* Logo */}
  <h2 className="text-3xl font-extrabold italic text-[#00ffc8]">
    VIBENEWS
  </h2>

  {/* Social Icons */}
  <div className="flex space-x-6 mt-4 text-white">
    <Facebook className="w-6 h-6  cursor-pointer" />
    <Twitter className="w-6 h-6 cursor-pointer" />
    <Instagram className="w-6 h-6 cursor-pointer" />
    <Linkedin className="w-6 h-6 cursor-pointer" />
  </div>
</div>


      {/* Middle Section: Links */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-10 text-sm">
        {/* About */}
        <div>
          <h3 className="font-[oswald] text-white text-[21px] mb-4" style={{fontWeight:700}}>ABOUT</h3>
          <ul className="space-y-1 text-[16px]" style={{fontFamily:"Roboto, sans-serif",color:"#c6c6c6"}}>
            <li>About US</li>
            <li>Contact Us</li>
            <li>Feedback</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>Advertise</li>
          </ul>
        </div>

        {/* Sections */}
        <div>
          <h3 className="font-[oswald] text-white text-[21px] mb-4" style={{fontWeight:700}}>SECTIONS</h3>
          <ul className="space-y-1 text-[16px]" style={{fontFamily:"Roboto, sans-serif",color:"#c6c6c6"}}>
            <li>Business</li>
            <li>Sports</li>
            <li>Politics</li>
            <li>Technology</li>
            <li>Health</li>
            <li>Science</li>
            <li>Education</li>
            <li>Entertainment</li>
          </ul>
        </div>

       
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-4 text-xs flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>
          © Copyright <span className="font-bold text-white">VIBENEWS</span> 2023. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Buy Theme</a>
        </div>
      </div>
    </footer>
  );
}
