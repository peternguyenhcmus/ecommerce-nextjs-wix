import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";
import Head from "next/head";

const fontFamily = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "E-Commerce Nextjs Wix Headless",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/logo-web.svg" />
      </Head>
      <body className={fontFamily.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
