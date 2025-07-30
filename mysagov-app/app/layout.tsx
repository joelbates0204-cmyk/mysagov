import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "mySAGOV Digital Wallet",
  description: "Access your government licences and vehicle registrations",
  applicationName: "mySAGOV",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "mySAGOV",
  },
}

export const viewport: Viewport = {
  themeColor: "#4a5c6a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="mySAGOV" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}