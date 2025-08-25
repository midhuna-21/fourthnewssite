import { Mail, Send, AlertCircle, Users, Twitter, Facebook, Linkedin } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      title: "General Contact",
      description: "Questions about our reporting or suggestions for coverage?",
      email: "contact@mirrorstandard.com",
      icon: Mail,
    },
    {
      title: "Send Us a Tip",
      description: "The best stories start with readers. Share yours securely and confidentially.",
      email: "tips@mirrorstandard.com",
      icon: Send,
    },
    {
      title: "Corrections",
      description: "Spotted a mistake? Help us fix it quickly and transparently.",
      email: "corrections@mirrorstandard.com",
      icon: AlertCircle,
    },
    {
      title: "Media & Collaboration",
      description: "For journalists, researchers, or organizations seeking to collaborate.",
      email: "press@mirrorstandard.com",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-5xl font-light text-black dark:text-white mb-4 tracking-tight">
            Get in Touch
          </h1>
          <div className="w-20 h-[2px] bg-black dark:bg-white mx-auto mb-8"></div>
          <p className="text-lg text-black dark:text-white leading-relaxed max-w-2xl mx-auto font-light">
            We may be a digital-first newsroom, but we’re real people behind the bylines. 
            Whether you’ve got a tip, a correction, or just want to say hello — reaching us is simple.
          </p>
        </header>

        {/* Contact Sections */}
        <section className="grid gap-12 mb-20">
          {contacts.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <item.icon className="w-6 h-6 text-black dark:text-white" />
                <h2 className="text-xl font-medium text-black dark:text-white">
                  {item.title}
                </h2>
              </div>
              <p className="text-black dark:text-white font-light leading-relaxed mb-3">
                {item.description}
              </p>
              <a
                href={`mailto:${item.email}`}
                className="inline-block text-sm px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                {item.email}
              </a>
            </div>
          ))}
        </section>

        {/* Social Links */}
        <section className="text-center mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8">
            Stay Connected
          </h2>
          <div className="flex justify-center gap-10">
            <a
              href="#"
              className="flex items-center space-x-2 text-black dark:text-white hover:opacity-70 transition"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter/X</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-black dark:text-white hover:opacity-70 transition"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-black dark:text-white hover:opacity-70 transition"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <div className="w-8 h-[2px] bg-black dark:bg-white mx-auto mb-4"></div>
          <p className="text-black dark:text-white font-light italic max-w-xl mx-auto">
            Your input makes us stronger. Mirror Standard is built on community and trust — 
            so if you’ve got feedback, don’t hold back.
          </p>
        </div>
      </div>
    </div>
  );
}
