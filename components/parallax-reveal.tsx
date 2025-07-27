"use client"

import { useState, useEffect, useRef } from "react"

export default function ParallaxReveal() {
  const [isVisible, setIsVisible] = useState(false)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled to the very bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10 // 10px buffer
      setIsVisible(isAtBottom)
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check in case the page is already at the bottom on load
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      ref={parallaxRef}
      className={`fixed bottom-0 left-0 right-0 h-1/2 flex flex-col items-center justify-center z-40
                  transition-all duration-1000 ease-in-out
                  ${isVisible ? "bg-pink-500 opacity-100 pointer-events-auto" : "bg-transparent opacity-0 pointer-events-none"}`}
    >
      <h1 className="text-7xl md:text-8xl font-bold text-white font-mono leading-tight mb-4 transform -rotate-1">
        Break to Make
      </h1>
      <p className="text-lg md:text-xl text-white font-mono transform rotate-1">
        build your first hardware product with us.
      </p>
    </div>
  )
}
