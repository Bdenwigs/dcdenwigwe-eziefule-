import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";
import AOSInit from "@/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "D.C. DENWIGWE SAN & ASSOCIATES | Legal Excellence in Nigeria",
  description: "Professional Legal services by D.C. DENWIGWE SAN & ASSOCIATES. Expert advocacy in criminal defense, family law, corporate law, and more across Nigeria.",
  keywords: "D.C. DENWIGWE SAN & Associates, DENWIGWE, law firm Nigeria, criminal defense lawyer Nigeria, family law attorney Port Harcourt, corporate law firm Nigeria, best lawyers in Rivers State, NWIGWE SAN & Associates, Legal services Nigeria, Attorney Port Harcourt, Corporate lawyer Lagos, Litigation lawyer Abuja",
  authors: [{ name: "D.C. DENWIGWE SAN & ASSOCIATES" }],
  creator: "D.C. DENWIGWE SAN & ASSOCIATES",
  publisher: "D.C. DENWIGWE SAN & ASSOCIATES",
  openGraph: {
    title: "D.C. DENWIGWE SAN & ASSOCIATES | Legal Excellence in Nigeria",
    description: "Professional Legal services by D.C. DENWIGWE SAN & ASSOCIATES. Expert advocacy across Nigeria.",
    url: 'https://dcdenwigwesan.com', // Replace with actual URL if known
    siteName: 'D.C. DENWIGWE SAN & ASSOCIATES',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "D.C. DENWIGWE SAN & ASSOCIATES | Legal Excellence in Nigeria",
    description: "Professional Legal services by D.C. DENWIGWE SAN & ASSOCIATES. Expert advocacy across Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body>
        <AOSInit />
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
