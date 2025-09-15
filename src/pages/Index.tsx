import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Credibility from '@/components/Credibility';
import Features from '@/components/Features';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Credibility />
        <Features />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;