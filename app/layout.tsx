import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata = {
  title: "Biruwa - Youth-Led Climate Justice Collective",
  description:
    "A youth-led collective of 11 passionate minds committed to climate justice and sustainability in Nepal.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Kalam:wght@300;400;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="https://github.com/sanil18/biruwa/blob/main/assets/new-logo%20(1).png?raw=true" type="image/png" sizes="32x32" />
        <link rel="icon" href="https://github.com/sanil18/biruwa/blob/main/assets/new-logo%20(1).png?raw=true" type="image/png" sizes="16x16" />
        <link rel="icon" href="https://github.com/sanil18/biruwa/blob/main/assets/new-logo%20(1).png?raw=true" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://github.com/sanil18/biruwa/blob/main/assets/new-logo%20(1).png?raw=true" sizes="180x180" />
      </head>
      <body className="h-full">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <div className="wrapper">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
