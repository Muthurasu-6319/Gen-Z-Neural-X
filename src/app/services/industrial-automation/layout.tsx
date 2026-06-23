import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation Solutions | EMS, MES, SCADA, PLC, IIoT - Sivakasi, Srivilliputtur",
  description: "Gen Z Neural-X delivers Industrial Automation Solutions in Sivakasi, Srivilliputtur, Rajapalayam and Virudhunagar district — EMS, MES, SCADA Development, PLC Programming, Industrial IoT, Machine Monitoring, Production Dashboards, and Data Analytics.",
  keywords: [
    "industrial automation sivakasi", "industrial automation srivilliputtur", "industrial automation rajapalayam",
    "industrial automation virudhunagar", "industrial automation virudhunagar district",
    "industrial automation company tamil nadu", "factory automation sivakasi", "factory automation srivilliputtur",
    "Industry 4.0 sivakasi", "Industry 4.0 srivilliputtur", "Industry 4.0 tamil nadu",
    "EMS energy management system sivakasi", "energy management system srivilliputtur",
    "energy management system rajapalayam", "energy management system virudhunagar",
    "MES manufacturing execution system sivakasi", "MES software srivilliputtur",
    "manufacturing execution system rajapalayam", "manufacturing execution system virudhunagar",
    "SCADA development sivakasi", "SCADA system srivilliputtur", "SCADA company rajapalayam",
    "SCADA development virudhunagar", "SCADA HMI company tamil nadu",
    "PLC programming sivakasi", "PLC programming srivilliputtur", "PLC programming rajapalayam",
    "PLC programmer virudhunagar district", "Siemens PLC sivakasi", "Allen Bradley PLC srivilliputtur",
    "Mitsubishi PLC rajapalayam", "Delta PLC virudhunagar",
    "industrial IoT sivakasi", "IIoT srivilliputtur", "industrial IoT rajapalayam", "IIoT virudhunagar",
    "machine monitoring system sivakasi", "machine monitoring srivilliputtur",
    "OEE monitoring rajapalayam", "machine health monitoring virudhunagar",
    "production dashboard sivakasi", "production dashboard srivilliputtur",
    "KPI dashboard rajapalayam", "andon board virudhunagar",
    "industrial data analytics sivakasi", "industrial data analytics srivilliputtur",
    "factory data analytics rajapalayam", "manufacturing analytics virudhunagar",
    "automation engineer sivakasi", "automation company rajapalayam", "HMI SCADA company tamil nadu",
    "firecracker plant automation sivakasi", "textile automation srivilliputtur", "chemical plant automation virudhunagar"
  ],
  openGraph: {
    title: "Industrial Automation Solutions | Gen Z Neural-X | Sivakasi, Srivilliputtur, Tamil Nadu",
    description: "EMS, MES, SCADA, PLC, IIoT, Machine Monitoring, Production Dashboards & Data Analytics for factories in Sivakasi, Srivilliputtur, Rajapalayam and Virudhunagar district.",
    url: "https://gen-z-neural-x.vercel.app/services/industrial-automation",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Gen Z Neural-X Industrial Automation" }],
  },
};

export default function IndustrialAutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
