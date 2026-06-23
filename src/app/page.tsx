import HeroSection from "@/components/home/HeroSection";
import TechStackMarquee from "@/components/home/TechStackMarquee";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProductsOverview from "@/components/home/ProductsOverview";
import LearnHighlights from "@/components/home/LearnHighlights";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactCTA from "@/components/home/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gen Z Neural-X | Best IT & Industrial Automation Company in Sivakasi, Srivilliputtur",
  description: "Gen Z Neural-X — Leading IT company in Sivakasi, Srivilliputtur, Rajapalayam & Virudhunagar district. Expert in Web Development, AI/ML, Industrial Automation, EMS, MES, SCADA, PLC Programming, IIoT, Machine Monitoring & Digital Marketing.",
  keywords: [
    // Digital & Software
    "srivilliputtur best it company", "sivakasi best it company", "srivilliputtur internship", "sivakasi internship",
    "best software company in srivilliputtur", "best software company in sivakasi", "IT jobs in sivakasi",
    "IT jobs in srivilliputtur", "web development company in sivakasi", "web development company in srivilliputtur",
    "software training in srivilliputtur", "software training in sivakasi", "best IT training institute sivakasi",
    "AI solutions srivilliputtur", "tech courses sivakasi", "internship for engineering students in sivakasi",
    "internship for engineering students in srivilliputtur", "Virudhunagar district best IT company",
    "app development company sivakasi", "digital marketing agency srivilliputtur", "tech startup sivakasi",
    "rajapalayam it company", "rajapalayam software company", "virudhunagar district software company",
    // Industrial Automation
    "industrial automation company sivakasi", "industrial automation srivilliputtur", "industrial automation rajapalayam",
    "industrial automation virudhunagar district", "factory automation tamil nadu", "Industry 4.0 sivakasi",
    "SCADA development sivakasi", "SCADA system srivilliputtur", "PLC programming sivakasi",
    "PLC programming srivilliputtur", "PLC programming rajapalayam", "PLC programmer virudhunagar",
    "energy management system sivakasi", "EMS system srivilliputtur", "EMS industrial rajapalayam",
    "manufacturing execution system sivakasi", "MES software srivilliputtur",
    "industrial IoT solutions sivakasi", "IIoT srivilliputtur", "Industry 4.0 tamil nadu",
    "machine monitoring system sivakasi", "OEE dashboard srivilliputtur",
    "production dashboard sivakasi", "industrial data analytics sivakasi",
    "automation company rajapalayam", "HMI SCADA company virudhunagar"
  ]
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackMarquee />
      <ServicesOverview />
      <ProductsOverview />
      <WhyChooseUs />
      <LearnHighlights />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
