import { Mail, Twitter, Check, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  const principles = [
    {
      title: "Accuracy over speed",
      description: "We would rather be correct than first."
    },
    {
      title: "Transparency over spin", 
      description: "We show our sources, methods, and reasoning."
    },
    {
      title: "Independence over influence",
      description: "We are free from corporate or government ownership."
    }
  ];

  const promises = [
    "We will always label opinion pieces clearly",
    "We will never take payment to promote a story",
    "We will correct errors quickly and openly", 
    "We will continue operating independently, without compromising ties"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-6xl font-light text-black dark:text-white mb-4 tracking-tight">
        About Us
          </h1>
          <div className="w-16 h-px bg-black dark:bg-white mx-auto mb-8"></div>
          {/* <p className="text-xl text-black dark:text-white leading-relaxed max-w-2xl mx-auto font-light">
            Independent journalism for an informed world
          </p> */}
        </header>

        {/* About */}
        <section className="mb-20">
          <p className="text-lg text-black dark:text-white leading-tight mb-8 font-light">
            At Mirror Standard, we believe the world deserves news that's clear, honest, and free from hidden agendas. We are not a media empire backed by billion-dollar corporations or political donors. Instead, we're a group of independent journalists and editors working across time zones, united by one mission: to bring you the truth as it is.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            Our Mission
          </h2>
          <p className="text-lg text-black dark:text-white leading-tight mb-12 font-light">
            News should inform, not mislead. Our mission is to deliver real, unbiased reporting on the stories that shape our world. From politics and economics to culture and technology, we provide clarity where others create noise.
          </p>
          
          <div className="space-y-8">
            <p className="text-black dark:text-white font-medium mb-6">
              We approach every story with three guiding principles:
            </p>
            
            {principles.map((principle, index) => (
              <div key={index} className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-black dark:text-white font-light leading-tight">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Who We Are */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            Who We Are
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-black dark:text-white leading-tight font-light">
              Mirror Standard is a digital-first newsroom built by journalists who collaborate online. Our team includes veterans from legacy media alongside freelancers, analysts, and researchers. What unites us is our commitment to rigorous reporting and the belief that journalism should serve people, not power.
            </p>
            <p className="text-lg text-black dark:text-white leading-tight font-light">
              We are strong because we are small. Without multiple levels of bureaucracy, we can act swiftly, pursue significant stories, and answer directly to our readers.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            How We Work
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-black dark:text-white leading-tight font-light">
              Every article on Mirror Standard results from direct collaboration between reporters and editors. When stories require specialized expertise beyond our team, we consult specialists or publish under a "Mirror Standard Staff" byline to reflect collective effort.
            </p>
            <p className="text-lg text-black dark:text-white leading-tight font-light">
              We value feedback and dialogue. If you believe we missed something, got something wrong, or should explore a new angle, we want to hear from you. Journalism is strongest when it's a conversation.
            </p>
          </div>
        </section>

        {/* Our Promise */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            Our Promise
          </h2>
          <div className="space-y-4">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-black dark:text-white flex-shrink-0 mt-0.5" />
                <span className="text-lg text-black dark:text-white font-light leading-relaxed">
                  {promise}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8">
            Join the Conversation
          </h2>
          <p className="text-lg text-black dark:text-white leading-tight mb-12 font-light max-w-2xl mx-auto">
            Mirror Standard exists because readers like you value independent journalism. Whether you have a story idea, a correction, or simply want to connect:
          </p>
          
          <div>
            <a 
              href="mailto:contact@mirrorstandard.com" 
              className="inline-flex items-center space-x-3 text-lg text-black dark:text-white hover:opacity-70 transition-opacity group"
            >
              <Mail className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-white transition-colors">
                contact@mirrorstandard.com
              </span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
        
            
            <a 
              href="#" 
              className="inline-flex items-center space-x-3 text-lg text-black dark:text-white hover:opacity-70 transition-opacity group"
            >
              <Twitter className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-white transition-colors">
                Follow us on Twitter/X
              </span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="w-8 h-px bg-black dark:bg-white mx-auto mb-4"></div>
            <p className="text-black dark:text-white font-light italic">
              Independent journalism for an informed world.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}