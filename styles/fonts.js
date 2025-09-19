import { Inter } from "next/font/google"
import { Fredoka } from "next/font/google"

export const GeistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const GeistMono = Inter({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})
