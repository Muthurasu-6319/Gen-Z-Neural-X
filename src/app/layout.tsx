import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://gen-z-neural-x.vercel.app'),
  title: {
    default: "Gen Z Neural-X | AI Technology & Digital Solutions",
    template: "%s | Gen Z Neural-X"
  },
  description: "Gen Z Neural-X is a leading technology company offering Web Development, Mobile Apps, AI/ML Solutions, Game Development, Digital Marketing, and professional training courses.",
  keywords: ["web development", "AI solutions", "machine learning", "mobile app development", "digital marketing", "internships", "tech courses", "Gen Z Neural-X", "software company", "MERN stack", "Tamil Nadu Tech"],
  authors: [{ name: "Gen Z Neural-X Team" }],
  creator: "Gen Z Neural-X",
  publisher: "Gen Z Neural-X",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Gen Z Neural-X | Leading AI & Tech Solutions",
    description: "Transform your digital future with Gen Z Neural-X's cutting-edge software development and professional education services.",
    url: 'https://gen-z-neural-x.vercel.app',
    siteName: 'Gen Z Neural-X',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Gen Z Neural-X Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gen Z Neural-X | AI & Tech Solutions',
    description: 'Transform your digital future with Gen Z Neural-X.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
