import { Suspense } from "react"
import { AuthProvider } from "@/contexts/AuthContext"
import { XPProvider } from "@/contexts/XPContext"
import { GeistSans, GeistMono, fredoka } from "@/styles/fonts"
import Analytics from "@/components/Analytics"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${fredoka.variable}`}>
        <AuthProvider>
          <XPProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </XPProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
