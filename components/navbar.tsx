"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 p-6">
      {/* Reverted to absolute positioning, removed background, shadow, border, and rotation */}
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Removed counter-rotation */}
        <Link
          href="/"
          className="text-lg font-mono uppercase tracking-wide text-gray-800 hover:text-pink-500 transition-colors duration-200 relative group"
        >
          <span className="relative z-10">Break to Make</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <div className="flex space-x-6">
          <Link
            href="/"
            className={`font-mono text-sm uppercase tracking-wide relative group ${pathname === "/" ? "text-pink-500" : "text-gray-700 hover:text-pink-500"}`}
          >
            <span className="relative z-10">Home</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="/about"
            className={`font-mono text-sm uppercase tracking-wide relative group ${pathname === "/about" ? "text-pink-500" : "text-gray-700 hover:text-pink-500"}`}
          >
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <a
            href="mailto:bonasuh@usc.edu"
            className="font-mono text-sm uppercase tracking-wide text-gray-700 hover:text-pink-500 transition-colors duration-200 relative group"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      </div>
    </nav>
  )
}
