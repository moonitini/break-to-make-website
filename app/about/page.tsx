import Image from "next/image"
import Link from "next/link"
import FadeInSection from "@/components/fade-in-section" // Import the new component

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden pt-24 pb-12">
      {/* Subtle scattered background elements - even more dynamic */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-10 bg-gray-300 rotate-12 animate-pulse-fast"></div>
        <div className="absolute bottom-1/3 left-10 w-8 h-2 bg-pink-300 rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-20 right-20 w-3 h-3 border border-gray-400 rotate-12 animate-pulse-fast"></div>
        <div className="absolute bottom-10 right-1/2 w-2 h-14 bg-gray-200 -rotate-6 animate-pulse-slow"></div>
        <div className="absolute top-1/5 right-1/5 w-6 h-6 bg-pink-200 rounded-full opacity-30 animate-pulse-fast"></div>
        <div className="absolute bottom-1/5 left-1/5 w-1 h-16 bg-gray-400 rotate-30 opacity-30 animate-pulse-slow"></div>
        {/* Additional decorations */}
        <div className="absolute top-10 left-1/2 w-3 h-3 bg-yellow-300 rounded-full opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-5 h-1 bg-pink-500 rotate-60 opacity-50 animate-pulse-fast"></div>
        <div className="absolute top-1/3 left-5 w-2 h-8 bg-gray-200 -rotate-30 opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-4 h-4 border border-pink-400 rounded-full opacity-60 animate-pulse-fast"></div>
        <div className="absolute top-1/2 left-1/10 w-1 h-10 bg-yellow-400 rotate-15 opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/10 right-1/10 w-2 h-2 bg-gray-500 rounded-full opacity-70 animate-pulse-fast"></div>
        <div className="absolute top-1/6 right-1/4 w-7 h-1 bg-pink-300 -rotate-20 opacity-40 animate-pulse-slow"></div>
        <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-gray-300 rotate-45 opacity-50 animate-pulse-fast"></div>
        <div className="absolute top-1/8 right-1/8 w-2 h-12 bg-yellow-200 -rotate-10 opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
        {/* About Section - More structured, less rotation */}
        <div className="space-y-6 text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-mono leading-tight">
            About <span className="text-pink-500">Break to Make</span>
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Break to Make is the <em>first of its kind at USC</em>: a 48-hour hardware make-a-thon specifically designed
            for <strong>women and nonbinary makers</strong>. Our ethos is that anyone has the ability to make anything,
            given the proper resources and support. In past years, our event has welcomed over{" "}
            <strong>100+ makers</strong>.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Our mission isn't just to hold a makeathon, but to cultivate a vibrant, inclusive community that sustains
            itself far beyond the event. We welcome students from all disciplines—the arts, tech, history—with the
            curiosity to learn and grow.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="pt-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection className="flex justify-center">
              <div className="bg-white border-4 border-gray-300 shadow-xl p-2 transform rotate-2 hover:rotate-0 transition-transform duration-300 relative">
                {/* Tape effects */}
                <div className="absolute -top-2 -left-2 w-6 h-3 bg-yellow-200 opacity-80 rotate-12"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-3 bg-pink-200 opacity-80 -rotate-6"></div>
                <Image
                  src="/images/group-photo.png"
                  alt="Group photo of Break to Make participants"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeInSection>
            <FadeInSection className="flex justify-center">
              <div className="bg-white border-4 border-pink-300 shadow-xl p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative">
                {/* Tape effects */}
                <div className="absolute -top-2 -right-2 w-6 h-3 bg-gray-200 opacity-80 -rotate-12"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-3 bg-yellow-200 opacity-80 rotate-6"></div>
                <Image
                  src="/images/collaboration-photo.png"
                  alt="Participants collaborating at Break to Make"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeInSection>
            <FadeInSection className="md:col-span-2 flex justify-center">
              <div className="bg-white border-4 border-gray-400 shadow-xl p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300 relative">
                {/* Tape effects */}
                <div className="absolute -top-2 left-1/4 w-6 h-3 bg-pink-200 opacity-80 rotate-3"></div>
                <div className="absolute -bottom-2 right-1/4 w-6 h-3 bg-gray-200 opacity-80 -rotate-3"></div>
                <Image
                  src="/images/audience-photo.png"
                  alt="Audience at a Break to Make presentation"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Decorative Divider */}
        <FadeInSection className="w-full py-16 flex justify-center relative">
          <div className="w-full max-w-md h-1 bg-gray-200 transform -rotate-1 relative">
            <div className="absolute -top-2 -left-4 w-8 h-4 bg-pink-200 opacity-70 rotate-6"></div>
            <div className="absolute -bottom-2 -right-4 w-8 h-4 bg-yellow-200 opacity-70 -rotate-6"></div>
          </div>
        </FadeInSection>

        {/* Sponsors Section */}
        <div className="pt-16 space-y-8">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4 font-mono leading-tight">
            2025 <span className="text-pink-500">Sponsors</span>
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Break to Make is only made possible through the generosity of our partners.
          </p>
          <div className="pt-4">
            <Link
              href="https://drive.google.com/file/d/1Pn0rfShf47NseIywYy7YbTASBbEiyifl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-8 py-3 shadow-lg relative group hover:bg-pink-500 transition-colors duration-300 transform rotate-1 hover:rotate-0"
            >
              <div className="absolute -top-2 -left-2 w-6 h-4 bg-gray-200 opacity-80 rotate-12 group-hover:bg-pink-200"></div>
              <span className="font-mono uppercase tracking-wide text-sm">View Sponsorship Deck</span>
              <svg
                className="ml-2 h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </Link>
          </div>

          <div className="space-y-10 pt-8">
            {/* Masterpiece Tier */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-700 font-mono relative">
                Masterpiece Tier
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-500 transform -rotate-1"></span>
              </h3>
              <div
                className
                className="bg-white border-4 border-pink-500 shadow-xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300"
              >
                <Link href="https://www.playbook.com/?p=home" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/playbook-logo.png"
                    alt="Playbook - The Creative Storage Company"
                    width={300}
                    height={150}
                    className="mx-auto"
                  />
                </Link>
              </div>
              <p className="text-sm text-gray-600 font-mono">Playbook</p>
            </div>

            {/* Blueprint Tier */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-700 font-mono relative">
                Blueprint Tier
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-500 transform -rotate-1"></span>
              </h3>
              <div className="bg-white border-2 border-gray-300 shadow-lg p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <Link href="https://drinkkace.com/" target="_blank" rel="noopener noreferrer">
                  <Image src="/kace-tea-logo.png" alt="Kace Tea" width={180} height={90} className="mx-auto" />
                </Link>
              </div>
              <p className="text-sm text-gray-600 font-mono">Kace Tea</p>
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-8">
            Interested in supporting our mission? Reach out!
          </p>
          <div className="pt-4">
            <a
              href="mailto:bonasuh@usc.edu"
              className="inline-flex items-center bg-black text-white px-8 py-3 shadow-lg relative group hover:bg-pink-500 transition-colors duration-300 transform rotate-1 hover:rotate-0"
            >
              <div className="absolute -top-2 -left-2 w-6 h-4 bg-gray-200 opacity-80 rotate-12 group-hover:bg-pink-200"></div>
              <span className="font-mono uppercase tracking-wide text-sm">Partner With Us</span>
              <svg
                className="ml-2 h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v4a2 2 0 002 2h14a2 2 0 002-2v-4"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer with sketchy line */}
        <div className="pt-16">
          <div className="w-32 h-0.5 bg-gray-300 mx-auto mb-4 transform rotate-1"></div>
          <p className="text-sm text-gray-400 font-mono">© 2025 Break to Make</p>
        </div>
      </div>
    </div>
  )
}
