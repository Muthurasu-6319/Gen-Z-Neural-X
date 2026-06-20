import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Final Year Project Support | Gen Z Neural-X",
  description:
    "Get complete Final Year Project support – project development, IEEE documentation, report writing, synopsis, PPT, and viva preparation by expert engineers at Gen Z Neural-X.",
  keywords: [
    "final year project",
    "final year project help",
    "engineering project support",
    "project documentation",
    "viva preparation",
    "IEEE report writing",
    "BE project",
    "BTech project",
    "MCA project",
    "project with source code",
    "Gen Z Neural-X final year project",
  ],
  openGraph: {
    title: "Final Year Project Support | Gen Z Neural-X",
    description:
      "End-to-end final year project support – code, documentation, PPT, and viva coaching.",
    url: "https://gen-z-neural-x.vercel.app/learn/final-year-project",
    siteName: "Gen Z Neural-X",
    images: [{ url: "/final-year-project-hero.png", width: 1200, height: 630, alt: "Final Year Project Support" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Final Year Project Support | Gen Z Neural-X",
    description: "Get complete Final Year Project support – project development, IEEE documentation, report writing, synopsis, PPT, and viva preparation by expert engineers.",
    images: ["/final-year-project-hero.png"],
  },
  alternates: {
    canonical: "https://gen-z-neural-x.vercel.app/learn/final-year-project",
  },
};

export default function FinalYearProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Final Year Project Support",
    "provider": {
      "@type": "Organization",
      "name": "Gen Z Neural-X",
      "url": "https://gen-z-neural-x.vercel.app/"
    },
    "description": "End-to-end Final Year Project support including software development, IEEE documentation, abstract writing, PPT creation, and viva coaching for engineering students.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Project Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Development (Code implementation)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IEEE Report & Documentation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Viva Preparation & PPT"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
