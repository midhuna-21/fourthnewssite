import { Mail, Shield, Eye, Lock, Cookie, Users, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicy() {
    const purposes = [
        "To keep the site running smoothly and improve its performance.",
        "To see what stories resonate most with readers.",
        "To respond to your emails, tips, or correction requests.",
        "To send updates if you’ve asked to receive them.",
    ];

    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-16">

                {/* Header */}
                <header className="text-center mb-10">
                    <h1 className="text-6xl font-light mb-4 tracking-tight">
                        Privacy Policy
                    </h1>
                    <div className="w-16 h-[2px] bg-gray-600 mx-auto mb-8"></div>
                    {/* <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Last updated: <em>[Insert Date]</em>
          </p> */}
                </header>

                {/* Intro */}
                <section className="mb-10">
                    <p className="text-lg leading-relaxed font-light">
                        At Mirror Standard, we value the trust you place in us. We’re a small newsroom, not a tech giant, and protecting your privacy is just as important to us as reporting the news. This page explains what information we collect, why we collect it, and how you can stay in control.
                    </p>
                </section>

                {/* What We Collect */}
                <section className="mb-10">
                    <h2 className="text-2xl font-light mb-8 pb-3 border-b">
                        What We Collect (and What We Don’t)
                    </h2>
                    <p className="text-lg leading-relaxed mb-6 font-light">
                        When you visit our site, some basic information is automatically recorded — things like which pages you read, how long you stay, and what device or browser you’re using. This helps us understand what our readers care about and how to make the site work better.
                    </p>
                    <p className="text-lg leading-relaxed mb-6 font-light">
                        If you contact us — say, by sending a news tip, asking for a correction, or subscribing to updates — we’ll also collect the details you choose to share, such as your name and email address.
                    </p>
                    <p className="text-lg leading-relaxed font-light">
                        What we *don’t* collect: personal information we don’t need. We don’t ask for things like your home address, financial details, or anything unrelated to providing you with journalism. And we never sell or trade your information to anyone, ever.
                    </p>
                </section>

                {/* How We Use Your Information */}
                <section className="mb-10">
                    <h2 className="text-2xl font-light mb-8 pb-3 border-b">
                        How We Use Your Information
                    </h2>
                    <p className="text-lg leading-relaxed mb-8 font-light">
                        The information we gather is used for just a few clear reasons:
                    </p>
                    <div className="space-y-4">
                        {purposes.map((p, i) => (
                            <div key={i} className="flex items-start space-x-3">
                                <CheckCircle2 className="w-5 h-5 text-gray-700 mt-0.5" />
                                <span className="text-lg font-light leading-relaxed">{p}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg leading-relaxed font-light mt-6">
                        We don’t use your data for hidden purposes. If you give us your
                        email, we’ll use it to reply to you — not to flood your inbox.
                    </p>
                </section>

                {/* Cookies */}
                <section className="mb-10">
                    <h2 className="text-2xl font-light mb-8 pb-3 border-b">
                        Cookies and Analytics
                    </h2>
                    <p className="text-lg leading-relaxed mb-6 font-light">
                        Like most websites, we use small files called cookies. They help us see patterns, like which stories are most popular or whether readers are coming from phones or laptops. If you prefer not to use cookies, you can turn them off in your browser settings. You’ll still be able to read our stories just fine.
                    </p>
                    <p className="text-lg leading-relaxed font-light">
                        We also use third-party analytics tools (such as Google Analytics) to better understand readership trends. Those services may collect anonymous data under their own privacy policies.
                    </p>
                </section>

                {/* Your Rights */}
                <section className="mb-10">
                    <h2 className="text-2xl font-light mb-8 pb-3 border-b">
                        Your Choices and Rights
                    </h2>
                    <p className="text-lg leading-relaxed mb-6 font-light">
                        You’re in control of your information. If you’d like us to delete something you’ve shared, or if you want to see what details we have about you, just ask. Depending on where you live, privacy laws may give you specific rights — like requesting access, corrections, or erasure of your data.
                    </p>
                    <a
                        href="mailto:privacy@mirrorstandard.com"
                        className="inline-flex items-center space-x-3 text-lg hover:opacity-70 transition-opacity group"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="border-b border-transparent transition-colors">
                            privacy@mirrorstandard.com
                        </span>
                        <Shield className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </section>

                {/* Protection */}
                <section className="mb-10">
                    <h2 className="text-2xl font-light mb-8 pb-3 border-b">
                        How We Protect Your Information
                    </h2>
                    <p className="text-lg leading-relaxed font-light">
                        We take reasonable steps to keep your information safe. Most of what we hold is limited to email records and anonymous analytics data. We’re a small independent newsroom, not a company storing sensitive personal databases — and that’s intentional. Less data means less risk.
                    </p>
                </section>

                {/* Questions */}
                <section className="text-center mb-10">
                    <h2 className="text-2xl font-light mb-8">Questions?</h2>
                    <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto mb-8">
                        If you have concerns or just want to know more about how we handle
                        privacy, get in touch:
                    </p>
                    <a
                        href="mailto:privacy@mirrorstandard.com"
                        className="inline-flex items-center space-x-3 text-lg hover:opacity-70 transition-opacity group"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="border-b border-transparent transition-colors">
                            privacy@mirrorstandard.com
                        </span>
                    </a>
                </section>

                <div className="mt-16 pt-8 border-t border-gray-300">
                </div>
                <section className="text-center">
                    <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto">
                        we collect as little as possible, we use it only to improve your experience, and your data is never for sale.
                    </p>
                </section>
            </div>
        </div>
    );
}
