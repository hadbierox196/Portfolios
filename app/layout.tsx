import type React from "react"
import type { Metadata } from "next"
import { Barlow_Condensed, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hassan Farooq - Portfolio",
  description: "MBBS Student | Web Developer | Researcher",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      style={
        {
          "--font-barlow": barlowCondensed.style.fontFamily,
          "--font-poppins": poppins.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className={`font-poppins antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
