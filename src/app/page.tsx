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
