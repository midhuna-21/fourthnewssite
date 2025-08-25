import { Mail, ArrowRight, Check, Shield, Eye, Users } from 'lucide-react';

export default function EditorialPolicy() {
  const transparencyPoints = [
    "Clearly distinguish between news, opinion, and analysis",
    "Publish under an individual reporter's byline whenever possible",
    "Use a \"Mirror Standard Staff\" byline for collaborative or team-written stories"
  ];

  const ethicalStandards = [
    {
      title: "No hidden conflicts of interest",
      description: "Our reporters disclose personal or financial ties when relevant."
    },
    {
      title: "No undisclosed sponsored content", 
      description: "If a piece is paid for, it will be labeled clearly."
    },
    {
      title: "Respect for privacy",
      description: "We balance the public's right to know with the rights of individuals."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-6xl font-light text-black dark:text-white mb-4 tracking-tight">
            Editorial Policy
          </h1>
          <div className="w-16 h-px bg-black dark:bg-white mx-auto mb-8"></div>
          <p className="text-xl text-black dark:text-white leading-relaxed max-w-2xl mx-auto font-light">
            Mirror Standard
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-20">
          <p className="text-lg text-black dark:text-white leading-relaxed mb-8 font-light">
            At Mirror Standard, our job is simple but vital: report the news with honesty, clarity, and fairness. We are an independent group of journalists who collaborate online — not a corporate newsroom — and our editorial standards reflect that independence.
          </p>
        </section>

        {/* Independence and Integrity */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            Independence and Integrity
          </h2>
          <p className="text-lg text-black dark:text-white leading-relaxed font-light">
            We do not accept money, favors, or influence in exchange for coverage. Every story we publish is chosen because it matters, not because it benefits a sponsor or political interest. Our reporters and editors are free to pursue the truth without interference.
          </p>
        </section>

        {/* Accuracy First */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            Accuracy First
          </h2>
          <p className="text-lg text-black dark:text-white leading-relaxed font-light">
            We believe <strong className="font-medium">accuracy is more important than being first</strong>. Our journalists verify information through credible sources, fact-check data, and clearly attribute quotes or statistics. When facts are uncertain, we say so. When mistakes happen, we correct them openly (see our Corrections Policy).
          </p>
        </section>

        {/* Fairness and Balance */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            Fairness and Balance
          </h2>
          <p className="text-lg text-black dark:text-white leading-relaxed font-light">
            We aim to reflect multiple perspectives on complex issues. That doesn't mean giving equal weight to misinformation, but it does mean seeking out voices that help readers understand the full picture.
          </p>
        </section>

        {/* Transparency */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            Transparency
          </h2>
          <p className="text-lg text-black dark:text-white leading-relaxed mb-8 font-light">
            Our readers deserve to know how stories are produced. That's why we:
          </p>
          
          <div className="space-y-4">
            {transparencyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-black dark:text-white flex-shrink-0 mt-0.5" />
                <span className="text-lg text-black dark:text-white font-light leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Ethical Standards */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            Ethical Standards
          </h2>
          <p className="text-lg text-black dark:text-white leading-relaxed mb-8 font-light">
            Mirror Standard follows widely accepted journalistic ethics:
          </p>
          
          <div className="space-y-8">
            {ethicalStandards.map((standard, index) => (
              <div key={index} className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                  {standard.title}
                </h3>
                <p className="text-black dark:text-white font-light leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Reader Involvement */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            Reader Involvement
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-black dark:text-white leading-relaxed font-light">
              We believe journalism should be a conversation. If you have feedback, criticism, or a perspective we missed, please reach out. Your insights help us do better.
            </p>
            
            <div className="pt-4">
              <a 
                href="mailto:editorial@mirrorstandard.com" 
                className="inline-flex items-center space-x-3 text-lg text-black dark:text-white hover:opacity-70 transition-opacity group"
              >
                <Mail className="w-5 h-5" />
                <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-white transition-colors">
                  editorial@mirrorstandard.com
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="text-center">
          <h2 className="text-2xl font-light text-black dark:text-white mb-8">
            In Short
          </h2>
          <p className="text-lg text-black dark:text-white leading-relaxed font-light max-w-2xl mx-auto">
            We promise to stay independent, fact-based, and transparent — because our loyalty is to the truth, and to you, our readers.
          </p>

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