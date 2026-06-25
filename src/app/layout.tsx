import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  metadataBase: new URL('https://genzneuralx.com'),
  title: {
    default: "Gen Z Neural-X | AI Technology & Digital Solutions",
    template: "%s | Gen Z Neural-X"
  },
  icons: {
    icon: "/logo.png",
  },
  description: "Gen Z Neural-X is a leading technology company offering Web Development, Mobile Apps, AI/ML Solutions, Game Development, Digital Marketing, Industrial Automation (EMS, MES, SCADA, PLC, IIoT), and professional training courses in Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar district, Tamil Nadu.",
  keywords: [
    "web development", "AI solutions", "machine learning", "mobile app development", "digital marketing",
    "internships", "tech courses", "Gen Z Neural-X", "software company", "MERN stack", "Tamil Nadu Tech",
    "srivilliputtur best it company", "sivakasi best it company", "srivilliputtur internship", "sivakasi internship",
    "best software company in srivilliputtur", "best software company in sivakasi", "IT jobs in sivakasi",
    "IT jobs in srivilliputtur", "web development company in sivakasi", "web development company in srivilliputtur",
    "software training in srivilliputtur", "software training in sivakasi", "best IT training institute sivakasi",
    "AI solutions srivilliputtur", "tech courses sivakasi", "internship for engineering students in sivakasi",
    "internship for engineering students in srivilliputtur", "Virudhunagar district best IT company",
    "app development company sivakasi", "digital marketing agency srivilliputtur", "tech startup sivakasi",
    "industrial automation company sivakasi", "industrial automation srivilliputtur", "industrial automation rajapalayam",
    "industrial automation virudhunagar", "industrial automation tamil nadu",
    "SCADA development sivakasi", "SCADA system srivilliputtur", "PLC programming sivakasi",
    "PLC programming srivilliputtur", "PLC programming rajapalayam", "energy management system sivakasi",
    "manufacturing execution system sivakasi", "MES software srivilliputtur", "industrial IoT solutions sivakasi",
    "IIoT srivilliputtur", "Industry 4.0 tamil nadu", "machine monitoring system sivakasi",
    "production dashboard sivakasi", "factory automation virudhunagar district", "automation company rajapalayam"
  ],
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
    url: 'https://genzneuralx.com',
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gen Z Neural-X",
    "description": "IT & Industrial Automation company in Srivilliputtur, Sivakasi, Rajapalayam and Virudhunagar district, Tamil Nadu. Offering Web Development, AI/ML, SCADA, PLC Programming, EMS, MES, IIoT and Industrial Automation services.",
    "url": "https://genzneuralx.com",
    "telephone": "+918124996319",
    "email": "info@genzneuralx.com",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Srivilliputtur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "626125",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Sivakasi" },
      { "@type": "City", "name": "Srivilliputtur" },
      { "@type": "City", "name": "Rajapalayam" },
      { "@type": "AdministrativeArea", "name": "Virudhunagar District" }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61591068687800",
      "https://www.instagram.com/genz.neural_x/",
      "https://x.com/GenzNeuralX",
      "https://www.linkedin.com/company/gen-z-neural-x",
      "https://www.youtube.com/@GenzNeural-X",
      "https://bsky.app/profile/genzneural-x.bsky.social"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT & Industrial Automation Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SCADA Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PLC Programming" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Energy Management System" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial IoT Solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI/ML Solutions" } }
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
