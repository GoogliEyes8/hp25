import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../providers/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import type { Metadata } from "next";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | CDMAN Inc.",
    absolute: "CDMAN Inc.",
  },
  description:
    "CDMAN Inc.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster richColors position="top-center" duration={3000} />
      </body>
    </html>
  );
}
