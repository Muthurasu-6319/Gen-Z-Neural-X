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
    images: [{ url: "/final-year-project-hero.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function FinalYearProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
