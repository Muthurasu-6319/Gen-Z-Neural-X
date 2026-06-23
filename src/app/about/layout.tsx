import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Gen Z Neural-X | IT & Industrial Automation Company - Sivakasi, Srivilliputtur, Rajapalayam",
  description: "Learn about Gen Z Neural-X — a full-service technology and industrial automation company serving Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar district with web development, AI solutions, EMS, MES, SCADA, PLC, IIoT, machine monitoring, and production dashboards.",
  keywords: [
    "about gen z neural x", "gen z neural x srivilliputtur", "gen z neural x sivakasi",
    "srivilliputtur best it company", "sivakasi best it company", "rajapalayam it company",
    "best software company in srivilliputtur", "best software company in sivakasi",
    "IT jobs in sivakasi", "IT jobs in srivilliputtur",
    "web development company in sivakasi", "web development company in srivilliputtur",
    "AI solutions srivilliputtur", "tech startup sivakasi",
    "Virudhunagar district best IT company", "virudhunagar software company",
    // Industrial Automation About Page
    "industrial automation company sivakasi", "industrial automation srivilliputtur",
    "industrial automation rajapalayam", "industrial automation virudhunagar district",
    "SCADA company sivakasi", "PLC programming sivakasi", "PLC programmer srivilliputtur",
    "energy management system company sivakasi", "MES company srivilliputtur",
    "IIoT company sivakasi", "Industry 4.0 company tamil nadu",
    "machine monitoring company sivakasi", "production dashboard company srivilliputtur",
    "factory automation company rajapalayam", "automation engineer virudhunagar"
  ]
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
