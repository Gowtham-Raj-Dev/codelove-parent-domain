import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import WhyChoose from "@/components/WhyChoose";
import LearningCenter from "@/components/LearningCenter";
import Articles from "@/components/Articles";
import Documentation from "@/components/Documentation";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <WhyChoose />
        <LearningCenter />
        <Articles />
        <Documentation />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}


