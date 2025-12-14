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
import CookieConsent from './components/CookieConsent';
import ReviewsCarousel from './components/ReviewsCarousel';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-x-hidden">
      {/* Background Animation Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg"
      >
        דלג לתוכן הראשי
      </a>

      <div className="relative z-10">
        <Header />
        <main id="main-content">
          <Hero />
          <NoPay />
          <HowItWorks />
          <Benefits />
          <ReviewsCarousel />
          <About />
          <SocialProof />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>

      <WhatsAppButton />
      <AccessibilityWidget />
      <CookieConsent />
    </div>
  );
}

export default App;
