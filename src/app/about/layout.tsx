import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Gen Z Neural-X",
  description: "Learn more about Gen Z Neural-X, the leading IT company in Srivilliputtur and Sivakasi. We provide top-tier web development, AI solutions, and internship programs for students.",
  keywords: [
    "srivilliputtur best it company", "sivakasi best it company", "srivilliputtur internship", "sivakasi internship",
    "best software company in srivilliputtur", "best software company in sivakasi", "IT jobs in sivakasi", 
    "IT jobs in srivilliputtur", "web development company in sivakasi", "web development company in srivilliputtur",
    "software training in srivilliputtur", "software training in sivakasi", "best IT training institute sivakasi", 
    "AI solutions srivilliputtur", "tech courses sivakasi", "internship for engineering students in sivakasi", 
    "internship for engineering students in srivilliputtur", "Virudhunagar district best IT company"
  ]
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
