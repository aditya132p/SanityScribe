
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProviders from "@/components/ThemeProviders";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}>
       
        <ThemeProviders>
          <div className="w-full h-full  flex flex-col bg-white dark:bg-[#181A2A] justify-between">
            <Header />
            <div className=" max-w-[1152px] min-h-screen w-full mx-auto">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
