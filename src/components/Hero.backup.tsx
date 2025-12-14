import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'כמה כסף מגיע לי?';

  useEffect(() => {
    const words = fullText.split('').reverse();
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < words.length) {
        const displayText = words.slice(0, currentIndex + 1).reverse().join('');
        setTypedText(displayText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    const handleOpenForm = () => {
      setShowForm(true);
    };

    window.addEventListener('openContactForm', handleOpenForm);
    return () => window.removeEventListener('openContactForm', handleOpenForm);
  }, []);

  return (
    <section id="hero" className="relative flex items-center pt-20 pb-2 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.008]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="absolute top-20 left-0 w-1/3 h-64 opacity-5" aria-hidden="true">
        <img
          src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          role="presentation"
          className="w-full h-full object-cover rounded-r-3xl"
        />
      </div>

      <div className="absolute bottom-20 right-0 w-1/4 h-56 opacity-5" aria-hidden="true">
        <img
          src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          role="presentation"
          className="w-full h-full object-cover rounded-l-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 relative z-10 w-full">
        <div className="text-center space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              קבלו <span className="bg-gradient-to-l from-blue-600 to-blue-700 bg-clip-text text-transparent">החזר מס</span> — בלי טפסים, בלי בירוקרטיה
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
              למעלה מ-6,900 שכירים כבר קיבלו ממוצע של ₪11,847. מתי תורכם?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/60 hover:border-blue-300/50">
              <div className="flex items-center justify-between gap-3 px-4 md:px-8 py-4 md:py-6 cursor-pointer group" onClick={() => setShowForm(true)}>
                <div className="flex-1 text-lg md:text-2xl text-slate-700 font-medium min-h-[2rem] flex items-center order-1" dir="rtl">
                  <span className="inline-block w-0.5 h-7 bg-blue-600 animate-pulse ml-1"></span>
                  <span>{typedText}</span>
                </div>

                <button
                  type="button"
                  className="flex-shrink-0 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/40 group/btn order-2"
                  aria-label="שלח"
                >
                  <Send className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <p className="text-slate-500 text-sm mt-5 font-medium">
              תגובה תוך כמה דקות • מאובטח ומוגן
            </p>
          </div>
        </div>
      </div>

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
