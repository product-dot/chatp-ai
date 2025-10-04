import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Personas from '@/components/Personas';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Personas />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}

