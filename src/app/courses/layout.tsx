import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Training & IT Courses in Sivakasi and Srivilliputtur",
  description: "Gen Z Neural-X provides web development, AI solutions, software development, internships and IT training in Srivilliputtur, Sivakasi and Virudhunagar district.",
  keywords: [
    "srivilliputtur best it company", "sivakasi best it company", "srivilliputtur internship", "sivakasi internship",
    "best software company in srivilliputtur", "best software company in sivakasi", "IT jobs in sivakasi", 
    "IT jobs in srivilliputtur", "web development company in sivakasi", "web development company in srivilliputtur",
    "software training in srivilliputtur", "software training in sivakasi", "best IT training institute sivakasi", 
    "AI solutions srivilliputtur", "tech courses sivakasi", "internship for engineering students in sivakasi", 
    "internship for engineering students in srivilliputtur", "Virudhunagar district best IT company"
  ]
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
