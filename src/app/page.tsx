import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <WhyUs />
      <Services />
      <HowItWorks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
