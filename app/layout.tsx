import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/navbar" // Import the Navbar component

export const metadata: Metadata = {
  title: "Break to Make",
  description: "A 48-hour hardware make-a-thon for women and nonbinary makers.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Add the Navbar here */}
        {children}
      </body>
    </html>
  )
}
