import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextAuthSeassionProvider from "@/Providers/NextAuthSeassionProvider";
import { ThemeProvider } from "@/components/Context/ThemeContext";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resume Maker",
  description: "Make your Resume with Resume Maker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <NextAuthSeassionProvider>
          <Toaster richColors />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </NextAuthSeassionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
