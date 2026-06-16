import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Gen Z Neural-X",
  description: "Get in touch with Gen Z Neural-X in Srivilliputtur and Sivakasi. Contact us for software development, IT jobs, and internships.",
  keywords: [
    "srivilliputtur best it company", "sivakasi best it company", "srivilliputtur internship", "sivakasi internship",
    "best software company in srivilliputtur", "best software company in sivakasi", "IT jobs in sivakasi", 
    "IT jobs in srivilliputtur", "web development company in sivakasi", "web development company in srivilliputtur",
    "software training in srivilliputtur", "software training in sivakasi", "best IT training institute sivakasi", 
    "AI solutions srivilliputtur", "tech courses sivakasi", "internship for engineering students in sivakasi", 
    "internship for engineering students in srivilliputtur", "Virudhunagar district best IT company"
  ]
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
