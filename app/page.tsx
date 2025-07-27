"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react" // Import Instagram icon

export default function BreakToMakePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-09-28T00:00:00")

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Added pt-24 to push content down */}
      <div className="pt-24 max-w-5xl mx-auto text-center space-y-12 relative z-10">
        {/* Scattered background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-8 bg-gray-300 rotate-12"></div>
          <div className="absolute bottom-32 left-1/4 w-6 h-1 bg-pink-300 rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 border border-gray-400 rotate-12"></div>
          <div className="absolute bottom-20 right-10 w-1 h-12 bg-gray-200 -rotate-6"></div>
        </div>

        {/* Logo */}
        <div className="animate-fade-in transform -rotate-1">
          <Image
            src="/break-to-make-logo.png"
            alt="Break to Make 2025"
            width={600}
            height={300}
            className="mx-auto max-w-full h-auto"
            priority
          />
        </div>

        {/* Handwritten style note */}
        <div className="transform rotate-1 mb-8">
          <div className="inline-block bg-yellow-100 px-4 py-2 shadow-sm transform -rotate-2">
            <span className="text-sm text-gray-700 font-mono">sept 27-28 → mark your calendar!</span>
          </div>
        </div>

        {/* Countdown - scattered layout */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white border-2 border-gray-300 shadow-lg p-4 relative">
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full"></div>
                <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-1 font-mono">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="text-xs uppercase tracking-wide text-gray-600">days</div>
              </div>
            </div>

            <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white border-2 border-gray-300 shadow-lg p-4 relative">
                <div className="absolute -top-1 -left-2 w-3 h-3 bg-gray-400 rotate-45"></div>
                <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-1 font-mono">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs uppercase tracking-wide text-gray-600">hours</div>
              </div>
            </div>

            <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white border-2 border-gray-300 shadow-lg p-4 relative">
                <div className="absolute -bottom-1 -right-1 w-2 h-6 bg-pink-300"></div>
                <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-1 font-mono">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs uppercase tracking-wide text-gray-600">mins</div>
              </div>
            </div>

            <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white border-2 border-gray-300 shadow-lg p-4 relative">
                <div className="absolute -top-2 left-1/2 w-1 h-3 bg-gray-300 -rotate-12"></div>
                <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-1 font-mono">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-xs uppercase tracking-wide text-gray-600">secs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description with handwritten feel */}
        <div className="space-y-6 max-w-2xl mx-auto"></div>

        {/* Buttons with tape effect */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 shadow-lg relative">
              <div className="absolute -top-2 -left-2 w-6 h-4 bg-gray-200 opacity-80 rotate-12"></div>
              <span className="font-mono uppercase tracking-wide text-sm">Join Us</span>
            </button>
          </div>

          <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <Link
              href="/about" // Changed from '#' to '/about'
              className="border-2 border-gray-400 hover:border-pink-500 text-gray-700 hover:text-pink-500 px-8 py-3 shadow-lg relative bg-white"
            >
              <div className="absolute -bottom-1 -right-2 w-4 h-3 bg-yellow-200 opacity-70 -rotate-6"></div>
              <span className="font-mono uppercase tracking-wide text-sm">Learn More</span>
            </Link>
          </div>
        </div>

        {/* Footer with sketchy line and contacts */}
        <div className="pt-12 text-center">
          <div className="w-32 h-0.5 bg-gray-300 mx-auto mb-4 transform rotate-1"></div>
          <div className="flex flex-col items-center space-y-2 mb-4">
            <a
              href="https://www.instagram.com/scbreaktomake/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors duration-200 flex items-center space-x-2 font-mono text-sm"
            >
              <Instagram className="h-4 w-4" />
              <span>@scbreaktomake</span>
            </a>
            <a
              href="mailto:cmlai@usc.edu"
              className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-mono text-sm"
            >
              cmlai@usc.edu
            </a>
            <a
              href="mailto:bonasuh@usc.edu"
              className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-mono text-sm"
            >
              bonasuh@usc.edu
            </a>
            <a
              href="mailto:ewchang@usc.edu"
              className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-mono text-sm"
            >
              ewchang@usc.edu
            </a>
          </div>
          <p className="text-sm text-gray-400 font-mono">© 2025 Break to Make</p>
        </div>
      </div>
    </div>
  )
}
