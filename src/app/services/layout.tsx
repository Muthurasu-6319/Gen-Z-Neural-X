import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development, AI Solutions, Industrial Automation & Digital Marketing Services",
  description: "Gen Z Neural-X provides web development, AI solutions, industrial automation (EMS, MES, SCADA, PLC, IIoT), software development, and IT training in Sivakasi, Srivilliputtur, Rajapalayam and Virudhunagar district, Tamil Nadu.",
  keywords: [
    // Digital & Software
    "srivilliputtur best it company", "sivakasi best it company", "srivilliputtur internship", "sivakasi internship",
    "best software company in srivilliputtur", "best software company in sivakasi", "IT jobs in sivakasi",
    "IT jobs in srivilliputtur", "web development company in sivakasi", "web development company in srivilliputtur",
    "software training in srivilliputtur", "software training in sivakasi", "best IT training institute sivakasi",
    "AI solutions srivilliputtur", "tech courses sivakasi", "internship for engineering students in sivakasi",
    "internship for engineering students in srivilliputtur", "Virudhunagar district best IT company",
    // Industrial Automation
    "industrial automation company sivakasi", "industrial automation srivilliputtur", "industrial automation rajapalayam",
    "industrial automation virudhunagar", "industrial automation tamil nadu",
    "SCADA development sivakasi", "SCADA system srivilliputtur", "SCADA company tamil nadu",
    "PLC programming sivakasi", "PLC programming srivilliputtur", "PLC programming rajapalayam",
    "PLC programmer virudhunagar district", "PLC programmer tamil nadu",
    "energy management system sivakasi", "EMS system srivilliputtur", "EMS industrial virudhunagar",
    "manufacturing execution system sivakasi", "MES software srivilliputtur", "MES tamil nadu",
    "industrial IoT solutions sivakasi", "IIoT srivilliputtur", "Industry 4.0 tamil nadu",
    "machine monitoring system sivakasi", "machine monitoring rajapalayam",
    "production dashboard sivakasi", "OEE dashboard srivilliputtur",
    "industrial data analytics sivakasi", "factory automation virudhunagar district",
    "automation engineer sivakasi", "automation company rajapalayam", "HMI SCADA company tamil nadu"
  ]
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
