import Header from './components/Header';
import Hero from './components/Hero';
import NoPay from './components/NoPay';
import About from './components/About';
import SocialProof from './components/SocialProof';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AccessibilityWidget from './components/AccessibilityWidget';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg"
      >
        דלג לתוכן הראשי
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <NoPay />
        <HowItWorks />
        <Benefits />
        <About />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <AccessibilityWidget />
    </div>
  );
}

export default App;
