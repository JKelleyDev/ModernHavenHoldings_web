import type { Metadata } from "next"; // Metadata types for SEO and page titles
import { ReactNode } from "react"; // Types used for children, i.e the react nodes being used
import { Geist, Geist_Mono } from "next/font/google"; // fonts from google 
import "./globals.css"; // Global styles for the whole app 
import { ThemeProvider } from "@/components/theme-provider"; // Used for light/dark mode 
import { Header }from "@/components/Header"; // Header component from shadcn 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Exports the metadata to all pages
export const metadata: Metadata = {
  title: "Modern Haven Holdings",
  description: "",
};

interface RootLayoutProps {
  children: ReactNode
}

// Layout wrapper for every page
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        {/* Body element with font variabes and theme support */}
        <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header /> {/*Places the global header on every page */}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
