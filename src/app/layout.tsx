import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"
import localFont from "next/font/local"

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
})

const clashGrotesk = localFont({
  src: "/fonts/ClashGrotesk-Semibold.otf",
  variable: "--font-clash-grotesk-semibold",
  style: "normal"
})

export const metadata: Metadata = {
  title: "LetUsHelp",
  description: "LetUsHelp 3WD",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} ${clashGrotesk.variable} font-instrument font-[400] antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
