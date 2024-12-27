import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
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
      <body className={`${instrumentSans.variable} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
