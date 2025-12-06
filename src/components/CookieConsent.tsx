import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // בדיקה אם המשתמש כבר נתן הסכמה
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // מעט עיכוב כדי שהבאנר לא יופיע מיד
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              🍪 שימוש בעוגיות (Cookies)
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              אתר זה משתמש בעוגיות כדי לשפר את חווית הגלישה שלך ולספק שירות מיטבי.
              העוגיות עוזרות לנו להבין כיצד המשתמשים מתקשרים עם האתר ולשפר את התכנים והשירותים שלנו.
              בהתאם לחוק הגנת הפרטיות הישראלי, אנו מבקשים את הסכמתך לשימוש בעוגיות.
              {' '}
              <a
                href="/privacy"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                למידע נוסף על מדיניות הפרטיות שלנו
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 whitespace-nowrap"
              aria-label="דחה שימוש בעוגיות"
            >
              לא, תודה
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap shadow-lg"
              aria-label="אשר שימוש בעוגיות"
            >
              מאשר/ת שימוש בעוגיות
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
