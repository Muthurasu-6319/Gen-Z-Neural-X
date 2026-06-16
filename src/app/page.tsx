import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProductsOverview from "@/components/home/ProductsOverview";
import LearnHighlights from "@/components/home/LearnHighlights";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactCTA from "@/components/home/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gen Z Neural-X | AI Technology & Digital Solutions Company",
  description: "Gen Z Neural-X delivers cutting-edge Web Development, AI/ML Solutions, Mobile Apps, Digital Marketing, and professional IT courses. Transform your business with us.",
  keywords: [
    "srivilliputtur best it company", "sivakasi best it company", "srivilliputtur internship", "sivakasi internship",
    "best software company in srivilliputtur", "best software company in sivakasi", "IT jobs in sivakasi", 
    "IT jobs in srivilliputtur", "web development company in sivakasi", "web development company in srivilliputtur",
    "software training in srivilliputtur", "software training in sivakasi", "best IT training institute sivakasi", 
    "AI solutions srivilliputtur", "tech courses sivakasi", "internship for engineering students in sivakasi", 
    "internship for engineering students in srivilliputtur", "Virudhunagar district best IT company",
    "app development company sivakasi", "digital marketing agency srivilliputtur", "tech startup sivakasi"
  ]
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ProductsOverview />
      <WhyChooseUs />
      <LearnHighlights />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
