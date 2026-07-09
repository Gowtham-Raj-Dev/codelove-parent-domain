import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import WhyChoose from "@/components/WhyChoose";
import LearningCenter from "@/components/LearningCenter";
import Articles from "@/components/Articles";
import Documentation from "@/components/Documentation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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


