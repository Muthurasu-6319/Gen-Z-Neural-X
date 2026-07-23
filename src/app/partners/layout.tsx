import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency Partner Program & Product Co-Building | Gen Z Neural-X",
  description: "Scale your digital agency with 100% white-label software development or co-build high-impact products with Gen Z Neural-X. Explore referral commissions and tech co-founding.",
  keywords: [
    "Agency Partner Program",
    "White-Label Software Development",
    "Tech Co-Founder",
    "Product Co-Building",
    "Web Development Outsourcing",
    "Software Agency Partnership",
    "Gen Z Neural-X Partners"
  ],
  openGraph: {
    title: "Agency Partner Program & Product Co-Building | Gen Z Neural-X",
    description: "Scale your agency with white-label dev fulfillment or co-build innovative SaaS & tech products.",
    url: "https://genzneuralx.com/partners",
    siteName: "Gen Z Neural-X",
    type: "website",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
