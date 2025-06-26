import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Providers } from "@/lib/providers" // Import the Redux provider

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MovieFinder",
  description: "Discover and rate your favorite movies.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {" "}
          {/* Wrap the application with the Redux Provider */}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1 container mx-auto py-8 px-4">{children}</main>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
